var express=require('express');
var router=express.Router();
var app=express();

router.get('/', function (req, res, next) {
    res.send('hi');
});
module.exports = router;