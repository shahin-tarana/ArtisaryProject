import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT) || 10000,
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  geminiModel: process.env.GEMINI_MODEL || 'gemini-3.5-flash',
  nodeEnv: process.env.NODE_ENV || 'development',
};
