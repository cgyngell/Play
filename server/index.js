import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatRouter from './routes/chat.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  })
);
app.use(express.json({ limit: '2mb' }));

app.use('/api', chatRouter);

app.get('/api/health', (req, res) => {
  const configured = !!(
    process.env.SLATE_BASE_URL &&
    process.env.SLATE_USERNAME &&
    process.env.SLATE_PASSWORD &&
    process.env.ANTHROPIC_API_KEY
  );
  res.json({
    status: 'ok',
    slate_configured: configured,
    slate_url: process.env.SLATE_BASE_URL || null,
  });
});

app.listen(PORT, () => {
  console.log(`Slate CRM plugin server listening on http://localhost:${PORT}`);
  if (!process.env.SLATE_BASE_URL) {
    console.warn('  Warning: SLATE_BASE_URL is not set. Configure your .env file.');
  }
});
