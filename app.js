const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const articles = require('./routes/article');
const customEnv = require('custom-env');
const categories = require('./routes/category');


require('custom-env').env('local', './config');

mongoose.connect(process.env.CONNECTION_STRING)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/articles', articles);
app.use('/categories', categories);

console.log("App is listening on port " + process.env.PORT);
app.listen(process.env.PORT);