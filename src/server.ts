import dotenv from 'dotenv';
import express from 'express';

const app = express();

dotenv.config();

const port = process.env.PORT || 3000

app.get('/', (_, response) => {
  return response.send('Hello World!');
});

app.get('/hello', (_, response) => {
  return response.send('Hello World!');
});

app.listen(Number(port), '0.0.0.0', () => {
  console.log(`HTTP Server running! on port ${port}`);
});