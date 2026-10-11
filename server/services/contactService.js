import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, '../data/contact-submissions.json');

function ensureDataFile() {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, '[]', 'utf8');
  }
}

export function saveContactSubmission(data) {
  ensureDataFile();
  const existing = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    ...data,
    createdAt: new Date().toISOString()
  };
  existing.push(record);
  fs.writeFileSync(dataFilePath, JSON.stringify(existing, null, 2), 'utf8');
  return record;
}
