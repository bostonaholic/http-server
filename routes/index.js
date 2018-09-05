var router = require('express').Router();

router.get('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

router.post('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

router.put('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

router.delete('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

router.options('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

router.head('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

router.trace('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

router.connect('/', function(req, res, next) {
  console.log(req.method + ' ' + req.originalUrl);
  res.send('OK');
});

module.exports = router;
