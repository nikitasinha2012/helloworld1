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
  user: 'postgres',
  host: 'localhost',
  database: 'Bibo_db',
  password: 'Nikita201296',
  port: 5433,
})
  const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Bibo_db',
  password: 'Nikita201296',
  port:5433,
})
 client.connect()
 client.query('INSERT into my_breathe_table (percentage_in, percentage_out,correct_in,correct_out) values ($1, $2, $3, $4)',[percentage_in, percentage_out,correct_in,correct_out], (err, res) => 
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
 console.log('2222');
}
);
router.get('/getitem',  async(req,res,next)=>
{
 const { Pool, Client } = require('pg')
 const pool = new Pool
 ({
    user: 'postgres',
  host: 'localhost',
  database: 'Bibo_db',
  password: 'Nikita201296',
  port: 5433,
 });
 const client = new Client(
  {
    user: 'postgres',
    host: 'localhost',
    database: 'Bibo_db',
    password: 'Nikita201296',
    port:5433,
  })
await client.connect()
const result = await client.query('SELECT percentage_in,percentage_out,correct_in,correct_out from my_breathe_table ORDER BY time DESC')
console.log(result);
res.send(result ['rows'][0]);
await client.end()
});
module.exports = router;
