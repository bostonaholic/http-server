const server = require('express')();

const index = require('./routes/index');

server.use('/', index);

module.exports = server;
