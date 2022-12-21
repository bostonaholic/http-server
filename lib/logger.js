const util = require("util");

const logger = function (msg, obj) {
  if (!!obj) {
    console.log(
      msg,
      util.inspect(obj, { showHidden: true, depth: Infinity, colors: true })
    );
  } else {
    console.log(msg);
  }
};

module.exports = logger;
