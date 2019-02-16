var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('startpage1', { title: 'Start' });
});
module.exports = router;
