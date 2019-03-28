var express = require('express');
var router = express.Router();
var pg=require('pg');
var pgp = require('pg-promise')();
const { Client } = require('pg')
router.get('/',function(req, result, next) 
{
  console.log(req);
  var percentage_in=req.query.percentage_in;
  var percentage_out=req.query.percentage_out;
  var correct_in=req.query.correct_in;
  var correct_out=req.query.correct_out;
  const { Pool, Client } = require('pg')
  const pool = new Pool
  ({
  user: 'roryqgrrvgjrjl',
  host: 'ec2-23-23-184-76.compute-1.amazonaws.com',
  database: 'd5kfa12hcv1faj',
  password: 'b70e2f501af3e750b72ef65948da3cfebf9c64c210dd25fa93073cb3fbb774fa',
  port: 5433,
})
  const client = new Client({
  user: 'roryqgrrvgjrjl',
  host: 'ec2-23-23-184-76.compute-1.amazonaws.com',
  database: 'd5kfa12hcv1faj',
  password: 'b70e2f501af3e750b72ef65948da3cfebf9c64c210dd25fa93073cb3fbb774fa',
  port:5433,
})
var d = new Date();
 client.connect()
 client.query('INSERT into Bibo_table (percentage_in, percentage_out,correct_in,correct_out,time) values ($1, $2, $3, $4,$5)',[percentage_in, percentage_out,correct_in,correct_out,d], (err, res) => 
 {
    if (err) 
    {
      console.log(err.stack);
    };
    return result.send('success')
 });
  console.log(percentage_in)
  console.log(percentage_out)
  console.log(correct_in)
  console.log(correct_out)
}
);
router.get('/getitem',  async(req,res,next)=>
{
 const { Pool, Client } = require('pg')
 const pool = new Pool
 ({
    user: 'roryqgrrvgjrjl',
  host: 'ec2-23-23-184-76.compute-1.amazonaws.com',
  database: 'd5kfa12hcv1faj',
  password: 'b70e2f501af3e750b72ef65948da3cfebf9c64c210dd25fa93073cb3fbb774fa',
  port: 5433,
 });
 const client = new Client(
  {
    user: 'roryqgrrvgjrjl',
    host: 'ec2-23-23-184-76.compute-1.amazonaws.com',
    database: 'd5kfa12hcv1faj',
    password: 'b70e2f501af3e750b72ef65948da3cfebf9c64c210dd25fa93073cb3fbb774fa',
    port:5433,
  })
await client.connect()
data = {}
const result = await client.query('SELECT percentage_in,percentage_out,correct_in,correct_out from Bibo_table ORDER BY time DESC')
console.log(result);
dbQuery1 =  await client.query('SELECT COUNT(*) FROM Bibo_table');
dbQuery2=  await client.query('SELECT ROUND(AVG(percentage_in) ,0) FROM Bibo_table');
dbQuery3=  await client.query('SELECT ROUND(AVG(percentage_out) ,0) FROM Bibo_table');
dbQuery4 = await client.query('SELECT ROUND(AVG(correct_in) ,0) FROM Bibo_table');
dbQuery5 = await client.query('SELECT ROUND(AVG(correct_out) ,0) FROM Bibo_table');
data['total_participants'] = dbQuery1['rows'][0].count;
data['breathe_in_percent']=dbQuery2['rows'][0].round;
data['breathe_out_percent']=dbQuery3['rows'][0].round;
data['breathe_in_correct']=dbQuery4['rows'][0].round;
data['breathe_out_correct']=dbQuery5['rows'][0].round;
data['previous_result'] = result ['rows'][0]
res.send(data)
// res.send(result ['rows'][0]);
await client.end()
});
module.exports = router;
