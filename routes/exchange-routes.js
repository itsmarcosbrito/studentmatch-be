const express = require('express');
const router = express.Router();
const Exchange = require('../models/exchange');
const mongoose = require('mongoose');

//Read
router.get('/exchanges', (req, res) => {
  Exchange.find()
    .then((allExchangesfromDB) => {
      res.status(200).json(allExchangesfromDB);
    })
    .catch((error) => {
      res.status(500).json(`Error occurred ${error}`);
    });
});

//Create
router.post('/exchanges', (req, res) => {
  const { to, from } = req.body;

  if (!to || !from) {
    res.status(400).json('Missing fields');
    return;
  }

  Exchange.create({
    to,
    from
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(`Error occurred ${error}`);
    });
});

module.exports = router;
