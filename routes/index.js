var express = require("express");
var router = express.Router();

const { v4: uuidv4 } = require("uuid");

const requestLogger = require("../lib/request_logger");
const responseLogger = require("../lib/response_logger");

router.all("/respondWith/*", function (req, res, next) {
  const requestId = uuidv4();
  requestLogger(req, requestId);

  const statusCode = parseInt(req.originalUrl.replace("/respondWith/", ""));
  const response = res.status(statusCode);

  responseLogger(response, requestId);
  response.send();
});

router.all("*", function (req, res, next) {
  const requestId = uuidv4();
  requestLogger(req, requestId);

  responseLogger(res, requestId);
  res.end();
});

module.exports = router;
