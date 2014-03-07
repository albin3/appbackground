// userctrl model
var config = require('../../config');
var mongojs = require('mongojs');
var db = mongojs(config.dbinfo.dbname);

var dbappuser = db.collection('appuser');

// 找到所有app用户数据
exports.alluser =  function (callback) {
  dbappuser.find(function (err, docs) {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  });
};
