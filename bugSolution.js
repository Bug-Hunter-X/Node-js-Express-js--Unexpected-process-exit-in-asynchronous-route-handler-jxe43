const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/exit', (req, res) => {
  //Properly handle the exit by using a more controlled approach that allows for cleanup tasks
  //Example: Graceful shutdown with a delay.
  console.log('Exiting...');
  setTimeout(() => {
    process.exit(0); //Use exit code 0 for successful termination
  }, 3000); //3-second delay for demonstration
  res.send('Exiting in 3 seconds...');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});