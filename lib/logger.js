const util = require('util');

const logger = function(msg, obj) {
  console.log(msg, util.inspect(obj, { showHidden: true,
                                       depth: Infinity,
                                       colors: true }));
};

module.exports = logger;
