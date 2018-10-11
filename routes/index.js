const router = require('express').Router();
const bodyParser = require('body-parser');  // for parsing multipart/form-data

const uuidv1 = require('uuid/v1');

const requestLogger = require('../lib/request_logger');
const responseLogger = require('../lib/response_logger');

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.all('/respondWith/*', function(req, res, next) {
  const requestId = uuidv1();
  requestLogger(req, requestId);

  const statusCode = parseInt(req.originalUrl.replace('/respondWith/', ''));
  const response = res.status(statusCode);

  responseLogger(response, requestId);
  response.send();
});

router.all('*', function(req, res, next) {
  const requestId = uuidv1();
  requestLogger(req, requestId);

  responseLogger(res, requestId);
  res.end();
});

module.exports = router;
