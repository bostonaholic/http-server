var router = require('express').Router();
var bodyParser = require('body-parser');  // for parsing multipart/form-data

const uuidv1 = require('uuid/v1');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var requestLogger = function(req, requestId) {
  const prefix = '[' + requestId + '] ';

  console.log(prefix + req.method + ' ' + req.originalUrl);

  if(!!req.params) {
    console.log(prefix + 'params', req.params);
  }
  if(!!req.body) {
    console.log(prefix + 'body', req.body);
  }
  if(!!req.query) {
    console.log(prefix + 'query', req.query);
  }
};

router.get('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

router.post('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

router.put('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

router.delete('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

router.options('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

router.head('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

router.trace('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

router.connect('/', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

module.exports = router;
