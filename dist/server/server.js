"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const app = _express2.default.call(void 0, );


app.listen(3000, function () {
    console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});

exports. default = app;