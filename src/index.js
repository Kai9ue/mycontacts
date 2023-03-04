const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Hello');
});

app.listen(3003, () => console.log('Its ok http://localhost:3003'));
