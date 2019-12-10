const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => {
  // GEt some data from request:
  console.log('REQUEST', req.query);

  // Modify headers:
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Content-Type', 'application/json');
  
  // Send response:
  res.send({message: 'hello'});
})

// Start app:
app.listen(port, () => console.log(`API listening on port ${port}!`));