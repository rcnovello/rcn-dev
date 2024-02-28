const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser'); // Importe o body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Use path.join para construir o caminho correto

app.use(express.static(path.join(__dirname, '/')));

//const http = require('node:http');

//const hostname = '0.0.0.0';
const hostname = 'http://localhost';
const port = 3000;


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/politica_privacidade', (req, res) => {
  res.render('politica_privacidade');
});

//const server = http.createServer(app);

//server.listen(port, hostname, () => {
//app.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
//});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
