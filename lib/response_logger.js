const logger = require('./logger');

const responseLogger = function(res, requestId) {
  const prefix = '[' + requestId + '] [response]';

  logger(prefix + ' status', res.statusCode);
};

module.exports = responseLogger;
