var express = require("express");
var router = express.Router();

const { v4: uuidv4 } = require("uuid");

const requestLogger = require("../lib/request_logger");
const responseLogger = require("../lib/response_logger");

router.all("/respondWith/*", function (req, res, next) {
  const requestId = uuidv4();
  requestLogger(req, requestId);

  const statusCode = parseInt(req.originalUrl.replace("/respondWith/", ""));
  res.status(statusCode);
  res.set("X-Request-Id", requestId);

  try {
    res.send();
  } catch (error) {
    res.status(400).send();
  } finally {
    responseLogger(res, requestId);
  }
});

router.all("*", function (req, res, next) {
  const requestId = uuidv4();
  requestLogger(req, requestId);

  responseLogger(res, requestId);

  res.set("X-Request-Id", requestId);
  res.end();
});

module.exports = router;
