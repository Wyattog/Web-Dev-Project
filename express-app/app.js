const mongoose = require('mongoose');


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var appliancesRouter = require('./routes/appliances');

console.log('--Mongoose Test--');

let connectionString = "mongodb://127.0.0.1:27017/HiveDB?retryWrites=true&w=majority";

mongoose.set('useUnifiedTopology', true); //sets to true so we can use the new server monitoring rather than the old. 
mongoose.set('useCreateIndex', true); //false by default when set to true the default index creation will use create index instead of insure index
mongoose.set('useFindAndModify', false); //true by default when set to false the find one and remove function will use a native find one and update/remove
mongoose.set('useNewUrlParser', true); //the underlined mongodb driver that has been nulled so the parseing needs to use the new one (forceing the new one to be used)

mongoose.connect(connectionString)
    .then(

        () => {
            console.log('Connection Successful');
            
        }
        
    )
    .catch(
        (error) => {
            console.log('An error has occurred: ', error );
        }
    )

    var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/appliances', appliancesRouter);

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