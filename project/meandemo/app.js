var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var mongoose = require('mongoose');
var options = { replset: { socketOptions: { connectTimeoutMS : 60000 }}};

setTimeout(function() {
mongoose.connect('mongodb://meandemo_mongo/mean-angular6',options);
  }, 10000);

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Successfully connected to database mongodb @ 27017');
});
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('Error!! in database connection:' +err);
    }
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
