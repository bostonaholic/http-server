var router = require('express').Router();

router.get('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

module.exports = router;
