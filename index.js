const express = require('express'); // Obviously, we need Express.
const pug = require('pug'); // And we couldn't render Pug without Pug.

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(pug.renderFile('/index.pug')); // We use pug.renderFile to render a file.
});

app.get('/kofi', function (req, res) {
    res.send(pug.renderFile('/kofi.pug')); // We use pug.renderFile to render a file.
});

app.listen(8080, function() {
    console.log('Servidor Funcionando!');
});