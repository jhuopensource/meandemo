var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var mongooseConnectionOptions = { replset: { socketOptions: { connectTimeoutMS : 60000 }}};
var waitOn = require('wait-on');

var waitMongooseReadyOpts = {
  resources: [
    'tcp:meandemo_mongo:27017',
  ],
  delay: 1000, // initial delay in ms, default 0
  interval: 100, // poll interval in ms, default 250ms
  timeout: 30000, // timeout in ms, default Infinity
  tcpTimeout: 1000, // tcp timeout in ms, default 300ms
  window: 1000 // stabilization time in ms, default 750ms
};

waitOn(waitMongooseReadyOpts, function (err)
  {
  mongoose.connect('mongodb://meandemo_mongo/mean-angular6',mongooseConnectionOptions);
  //on connection
  mongoose.connection.on('connected', function()
    {
      console.log('Successfully connected to database mean-angular6 @ meandemo_mongo:27017');
    });
  mongoose.connection.on('error', function(err)
    {
    if(err)
      {
        console.log('Error!! in database connection to mean-angular6 @ meandemo_mongo:27017:' +err);
      }
    });
  });

var apiRouter = require('./routes/entry');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*
// Remove static from node, nginx handles this
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/entries', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/entry-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/entry-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/entry-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
*/
app.use('/api', apiRouter);

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
  res.send(err.status);
});

module.exports = app;
