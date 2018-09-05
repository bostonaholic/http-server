var router = require('express').Router();
var bodyParser = require('body-parser');  // for parsing multipart/form-data

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var requestLogger = function(req) {
  console.log(req.method + ' ' + req.originalUrl);

  if(!!req.params) {
    console.log('params', req.params);
  }
  if(!!req.body) {
    console.log('body', req.body);
  }
  if(!!req.query) {
    console.log('query', req.query);
  }
};

router.get('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

router.post('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

router.put('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

router.delete('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

router.options('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

router.head('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

router.trace('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

router.connect('/', function(req, res, next) {
  requestLogger(req);
  res.send('OK');
});

module.exports = router;
