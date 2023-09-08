import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';
//* CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

import express from 'express';
import rateLimiter from 'express-rate-limit';

const app = express();
const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});

// routers
import openaiRouter from './routes/openaiRoutes.js';

app.use('/api/v1/openai', openaiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
