const router = require('express').Router();
const bodyParser = require('body-parser');  // for parsing multipart/form-data

const uuidv1 = require('uuid/v1');
const util = require('util');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const logger = function(msg, obj) {
  console.log(msg, util.inspect(obj, { showHidden: true,
                                       depth: Infinity,
                                       colors: true }));
};

const requestLogger = function(req, requestId) {
  const prefix = '[' + requestId + '] ';

  console.log(prefix + req.method + ' ' + req.originalUrl);

  if(!!req.params) {
    logger(prefix + 'params', req.params);
  }
  if(!!req.body) {
    logger(prefix + 'body', req.body);
  }
  if(!!req.query) {
    logger(prefix + 'query', req.query);
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
