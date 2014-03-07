// appapi model.js
var config = require('../../config');
var mongojs = require('mongojs');
var db = mongojs(config.dbinfo.dbname);

var db_user = db.collection('appusers');

// app 注册新用户
exports.newuser = function (user, callback) {
  
  db_user.insert(user, function (err, docs) {
  });
};
