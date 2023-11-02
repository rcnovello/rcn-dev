const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser'); // Importe o body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path.join para construir o caminho correto

app.use(express.static(path.join(__dirname, '/')));

const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;


app.get('/', (req, res) => {
  res.render('index');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});