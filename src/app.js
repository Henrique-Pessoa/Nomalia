const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const index = require('./Routes/Routes');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/', index);


module.exports = app;