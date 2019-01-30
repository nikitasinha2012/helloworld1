var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('startpage1', { title: 'Start' });
});

module.exports = router;
