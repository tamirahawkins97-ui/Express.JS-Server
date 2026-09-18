// 1. Import express and the built-in path module
const express = require('express');
const path = require('path');

// 2. Create an instance of an Express application
const app = express();

// 3. Define the port to run the server on
const port = 3000;

// 4. GET route for the root URL ('/') sending index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 5. GET route for '/contact' sending contact.html
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// 6. Start the server and listen on the chosen port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});