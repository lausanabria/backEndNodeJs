const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors())

app.use(express.json()) // for parsing application/json 
app.use(express.urlencoded({ extended: true }))

const ruta = require('./route');
app.use(ruta);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
