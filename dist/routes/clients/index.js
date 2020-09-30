"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _express = require('express'); var express = _interopRequireWildcard(_express);

const  router = express.Router(); 


router.get('/', function (req, res) {
    res.send([{},{},{}]);
});


module.exports = router;