var server = require('express')();

var index = require('./routes/index');

server.use('/', index);

module.exports = server;
