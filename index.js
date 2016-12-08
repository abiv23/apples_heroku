const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});

app.get('/apple', (req, res) => {
  knex('apple_type').then(types => {
    res.json(types);
  } )
});

app.get('/apple/:id', (req, res) => {
  knex('apple_type').where('id', req.params.id).first().then(type => {
    res.json(type);
  } )
});
