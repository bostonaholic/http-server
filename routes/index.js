const router = require('express').Router();
const bodyParser = require('body-parser');  // for parsing multipart/form-data

const uuidv1 = require('uuid/v1');

const requestLogger = require('../lib/request_logger');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.all('/status/*', function(req, res, next) {
  requestLogger(req, uuidv1());

  const status = parseInt(req.originalUrl.replace('/status/', ''));
  res.status(status).send();
});

router.all('*', function(req, res, next) {
  requestLogger(req, uuidv1());
  res.send('OK');
});

module.exports = router;
