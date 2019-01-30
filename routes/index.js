var express = require('express');
var router = express.Router();
var app = express();

var pg=require('pg');
var pgp = require('pg-promise')();

const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 database: 'Bibo_db',
 password: 'Nikita201296',
 port: 5433,
})

router.get('/', function (req, res, next) {
  res.render('index');
 });



module.exports=router;