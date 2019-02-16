var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  console.log('result page');
  res.render('result');
});
module.exports = router;
