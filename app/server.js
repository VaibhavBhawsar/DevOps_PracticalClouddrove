const express = require('express');
const app = express();

const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello from VaibhavB DevOps Practical!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
