const express = require('express');
const router = express.Router();
const Asset = require('../models/asset');
const mongoose = require('mongoose');

//Read
router.get('/assets', (req, res) => {
  Asset.find()
    .then((allAssetsfromDB) => {
      res.status(200).json(allAssetsfromDB);
    })
    .catch((error) => {
      res.status(500).json(`Error occurred ${error}`);
    });
});

//Create
router.post('/assets', (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json('Missing fields');
  }

  Asset.create({
    name,
      owner: req.user._id
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(`Error occurred ${error}`);
    });
});


module.exports = router;
