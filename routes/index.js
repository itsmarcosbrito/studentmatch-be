const express = require('express');
const router = new express.Router();
const routeGuard = require('./../middleware/route-guard');

router.get('/', (req, res, next) => {
  res.json({ type: 'fail', data: { title: 'Login Error' } });
});

router.get('/user-profile', (req, res, next) => {
  console.log(req);
  res.json({ type: 'success', data: req.user });
});

router.get('/private', routeGuard, (req, res, next) => {
  res.json({});
});

module.exports = router;
