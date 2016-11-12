'use strict'
const express = require('express');
const path = require('path');
const key = process.env.API__KEY;


const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api', (req, res) => {
  res.json(key);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.listen(port, (err)=> {
  if(err) {
    console.log(" ❌ You have recieved the following error: ", err);
  }
  console.log(`🌎 🌍 🌏 Server is listening on port: ${port} 🌏 🌍 🌎`);
});