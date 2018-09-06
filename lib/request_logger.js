const logger = require('./logger');

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

module.exports = requestLogger;
