/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var swig = require('swig');
var modules = require('./modules');

var app = express();
// set up swig
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.set('view cache', false);
swig.setDefaults({ cache: false });

// set up environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

// 设置session
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: "This is a secret"}));

// 设置路由和静态路由
app.use(app.router);
app.use(express.static(path.join(__dirname, 'static')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// 注册路由
modules.registers(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
