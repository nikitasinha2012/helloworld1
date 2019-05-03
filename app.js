var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var startRouter = require('./routes/startpage1');
var nextpage1 = require('./routes/nextpage1');
var nextpage2Router = require('./routes/nextpage2');
var nextpage3Router = require('./routes/nextpage3');
var resultRouter = require('./routes/result');
var storeRouter=require('./routes/store');
var app = express();
var cors = require('cors');
 
app.use(cors({
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/',indexRouter);
app.use('/startpage1',startRouter);
app.use('/nextpage1',nextpage1);
app.use('/nextpage2',nextpage2Router);
app.use('/nextpage3',nextpage3Router);
app.use('/result', resultRouter);
app.use('/store',storeRouter);
app.use('/store/getitem',storeRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;