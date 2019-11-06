const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('x-server-date', new Date());
  return next();
});

app.get('/throw', (req, res, next) => {
  throw new Error('Something is wrong');
});

app.get('/next', (req, res, next) => {
  setTimeout(()=>{
    // throw new Error('Something is wrong');
    next(new Error('Something is wrong'));
  },1000);
})

app.get('/', (req, res, next) => {
  return res.send('Hello, I am a web server');
});

app.get('/time', (req, res, next) => {
  return res.send(new Date().toString());
});

app.get('/hello', (req, res, next) => {
  if (!req.query.name) {
    return res.status(400).end();
  }
  return res.send(`Hello! welcome to the web server ${req.query.name}`);
});

app.get('/user/:name', (req, res, next) => {//matches parameter that follows user/: and provides parameter in req.params
  return res.send(`User profile of ${req.params.name}`);
});

app.listen(3000);