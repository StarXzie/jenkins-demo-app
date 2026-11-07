const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from my CI/CD app!' });
});

module.exports = app;