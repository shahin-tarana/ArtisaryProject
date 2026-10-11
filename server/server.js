import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { config } from './config.js';
import { geminiService } from './services/geminiService.js';
import { saveContactSubmission } from './services/contactService.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../dist');

const requestLog = new Map();

app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  const key = `${req.method}:${req.originalUrl}`;
  const now = Date.now();

  if (!requestLog.has(key)) {
    requestLog.set(key, [now]);
  } else {
    const times = requestLog.get(key);
    times.push(now);
    const recent = times.filter((time) => now - time < 60000);
    requestLog.set(key, recent);
    if (recent.length > 20) {
      return res.status(429).json({ success: false, error: 'Rate limit exceeded. Please wait a moment before retrying.' });
    }
  }

  next();
});

app.get('/health', (req, res) => {
  res.json({ ok: true, status: 'healthy', env: config.nodeEnv });
});

app.post('/api/ai/chat', async (req, res) => {
  const { message, artForm } = req.body || {};

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ success: false, error: 'A message is required.' });
  }

  if (message.trim().length > 1800) {
    return res.status(413).json({ success: false, error: 'Message is too long. Keep it under 1800 characters.' });
  }

  const result = await geminiService.sendRequest({
    message: message.trim(),
    artForm: typeof artForm === 'string' ? artForm : 'General Indian art'
  });

  if (!result.ok) {
    return res.status(result.status || 500).json({ success: false, error: result.error });
  }

  return res.json({ success: true, reply: result.text });
});

app.post('/api/ai/challenge', async (req, res) => {
  const { difficulty = 'Beginner', artForm = 'General Indian art' } = req.body || {};

  const result = await geminiService.sendRequest({
    message: `Create a ${difficulty} creative challenge inspired by ${artForm}. Keep it practical and within 30 minutes.`,
    artForm,
    type: 'challenge'
  });

  if (!result.ok) {
    return res.status(result.status || 500).json({ success: false, error: result.error });
  }

  return res.json({ success: true, challenge: result.text });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All contact fields are required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(String(email).trim())) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  try {
    const saved = saveContactSubmission({ name, email, subject, message });
    return res.status(200).json({
      success: true,
      message: 'Your message was saved locally. Configure email delivery in production to send it automatically.',
      id: saved.id
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'The form could not be saved. Please try again later.' });
  }
});

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get(/^(?!\/api\/|\/health).*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

const port = Number(config.port) || 10000;
app.listen(port, '0.0.0.0', () => {
  console.log(`KalaVerse server running on http://0.0.0.0:${port}`);
});
