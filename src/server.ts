import express from 'express';

  const app = express();

  app.get('', (_, response) => {
    return response.send('Hello World!');
  });

  app.listen(3333, () => {
    console.log('HTTP Server running!');
  });