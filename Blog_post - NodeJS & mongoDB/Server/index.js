const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./Route/feed');

const app = express();


app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

mongoose
  .connect(
    'mongodb+srv://URL HERE.uuxosil.mongodb.net/Blogs?retryWrites=true'
    
    )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));

app.listen(8080);
