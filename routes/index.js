const router = require('express').Router();
const bodyParser = require('body-parser');  // for parsing multipart/form-data

const uuidv1 = require('uuid/v1');

const requestLogger = require('../lib/request_logger');
const responseLogger = require('../lib/response_logger');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.all('/status/*', function(req, res, next) {
  const requestId = uuidv1();
  requestLogger(req, requestId);

  const status = parseInt(req.originalUrl.replace('/status/', ''));
  const response = res.status(status);

  responseLogger(response, requestId);
  response.send();
});

router.all('*', function(req, res, next) {
  const requestId = uuidv1();
  requestLogger(req, requestId);

  responseLogger(res, requestId);
  res.send('OK');
});

module.exports = router;
