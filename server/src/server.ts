import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  // JSON
  response.json(['Diego', 'Cleiton', 'Robson', 'Daniel', 'Fernando']);
});

app.listen(3333, () => {
  console.log('app is running');
});
