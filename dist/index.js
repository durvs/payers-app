"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _server = require('./server/server'); var _server2 = _interopRequireDefault(_server);

_server2.default.use('/clients', require('./routes/clients/index'));

_server2.default.get('/', function (req, res) {
    res.send('Hello World!');
});

