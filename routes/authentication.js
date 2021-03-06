const { Router } = require('express');

const passport = require('passport');

const router = new Router();

router.post(
  '/sign-up',
  passport.authenticate('local-sign-up', {
    successRedirect: '/user-profile',
    failureRedirect: '/'
  })
);

router.post(
  '/sign-in',
  passport.authenticate('local-sign-in', {
    successRedirect: '/user-profile',
    failureRedirect: '/'
  })
);

router.post('/sign-out', (req, res, next) => {
  req.logout();
  res.json({});
});

module.exports = router;
