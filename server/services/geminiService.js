import { GoogleGenAI } from '@google/genai';
import { config } from '../config.js';

export function createGeminiService() {
  const client = config.geminiApiKey ? new GoogleGenAI({ apiKey: config.geminiApiKey }) : null;

  async function sendRequest({ message, artForm, type = 'chat' }) {
    if (!client) {
      return {
        ok: false,
        status: 503,
        error: 'Gemini API key is not configured on the server.'
      };
    }

    const prompt = `${type === 'challenge' ? 'Generate a creative challenge and keep it concise.' : 'You are a helpful cultural educator for Indian art.'}

Context:
- Art form: ${artForm || 'General Indian art'}
- User question: ${message}

Instructions:
- Answer only using broad, generally known cultural context and the user-selected art form.
- Do not invent historical facts, traditions, or communities.
- Be respectful and educational.
- If the user asks for a practical activity, keep it simple and specific.
- If you are unsure, say so clearly.

Return a helpful answer in Markdown with a concise but informative style.`;

    try {
      const response = await client.models.generateContent({
        model: config.geminiModel,
        contents: prompt
      });

      const text = response?.text || response?.output_text || 'The AI assistant did not return a usable answer.';
      return { ok: true, text };
    } catch (error) {
      const messageText = error?.message || 'Gemini provider request failed.';
      const status = error?.status || 500;

      if (messageText.toLowerCase().includes('api key') || messageText.toLowerCase().includes('authentication')) {
        return { ok: false, status: 401, error: 'The Gemini API key is invalid or unauthorized.' };
      }

      if (messageText.toLowerCase().includes('quota') || messageText.toLowerCase().includes('rate limit')) {
        return { ok: false, status: 429, error: 'Gemini quota or rate limiting was reached. Please retry later.' };
      }

      if (messageText.toLowerCase().includes('timeout')) {
        return { ok: false, status: 504, error: 'The Gemini request timed out. Please try again.' };
      }

      return { ok: false, status, error: 'The AI assistant could not generate a response at the moment. Please try again later.' };
    }
  }

  return { sendRequest };
}

export const geminiService = createGeminiService();
