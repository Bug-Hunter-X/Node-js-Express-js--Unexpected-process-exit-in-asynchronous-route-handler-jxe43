const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Uncommon bug: Unexpected behavior when using 'process.exit()' within an asynchronous operation.

app.get('/exit', (req, res) => {
  // This will likely not work as expected in some cases due to asynchronous operations
  process.exit();
  res.send('Exiting...'); //This may not execute
});