const logger = require("./logger");

const requestLogger = function (req, requestId) {
  const prefix = "[" + requestId + "] [request]";

  logger(prefix + " " + req.method + " " + req.originalUrl);

  !!req.params && logger(prefix + " params", req.params);
  !!req.body && logger(prefix + " body", req.body);
  !!req.query && logger(prefix + " query", req.query);
};

module.exports = requestLogger;
