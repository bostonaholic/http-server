const router = require('express').Router();
const bodyParser = require('body-parser');  // for parsing multipart/form-data

const uuidv1 = require('uuid/v1');

const requestLogger = require('../lib/request_logger');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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
