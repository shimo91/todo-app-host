const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();

const PORT = process.env.PORT



app.use(cors());
app.use(express.json());

const morgan= require('morgan');
app.use(morgan('dev'));

require('./config/dbConnection')

const path = require('path');
app.use(express.static(path.join(__dirname,'/build'))); 


const routerFile = require('./Routes/todo');
app.use('/api//todo',routerFile);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname
  ,'/build/index.html')); });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});