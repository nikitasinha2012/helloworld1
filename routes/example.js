var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hii');
});
module.exports=router;
var express = require('express');
var router = express.Router();
router.get('/',function(req, res, next) 
{
  console.log('here');
  res.render('result', { percentage_in: req.body.inscore });
  //var percentage_in=req.query.inscore;
  console.log(percentage_in);
  console.log('1');
  /*var percentage_out=req.body.outscore;
  var correct_in=req.body.inscore1;
  var correct_out=req.body.outscore1;*/
  console.log('2');
  client.connect()
  console.log('3');
  client.query('INSERT into my_breathe_db (percentage_in, percentage_out,correct_in,correct_out) values ($1, $2, $3, $4)',[percentage_in, percentage_out,correct_in,correct_out], (err, res) => {
    if (err) {
      console.log(err.stack);
      console.log('4');
    };
  });  
  client.end()
  console.log('5');
  console.log(percentage_in)
  console.log(percentage_out)
  console.log(correct_in)
  console.log(correct_out)
  res.send('hello world')
}
);
module.exports = router;