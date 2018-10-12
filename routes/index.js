var express = require('express');
var router = express.Router();

const uuidv1 = require('uuid/v1');

const requestLogger = require('../lib/request_logger');
const responseLogger = require('../lib/response_logger');

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
