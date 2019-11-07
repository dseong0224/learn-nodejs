const express = require('express');

const router = express.Router();

const speakersRoute = require('./speakers')

module.exports = () => {
  router.get('/', (req, res, next) => {
    return res.send('index');
  })

  router.use('/speakers',speakersRoute());

  return router
}