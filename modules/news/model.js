// news model
var config = require("../../config"); // 为了获取到路径
var qureystring = require("querystring");
var fs = require("fs");

var mongojs = require('mongojs');
var db = mongojs(config.dbinfo.dbname);
var dbnews = db.collection('news');
var ObjectID = require('mongodb').ObjectID;

// 上传文件
exports.updatepic = function(req, callback)
{
  var newPath = config.appPath() + "/static/img/" + req.params.picnum + ".jpg";

  fs.readFile(req.files.upload.path, function (err, data) {
    fs.writeFile(newPath, data, function (err) {
      fs.unlinkSync(req.files.upload.path);
      callback(err);
    });
  });
}

// 获取到所有新闻信息
exports.allnews = function (callback) {
  dbnews.find({}, function (err, docs) {
    callback(err, docs);
  });
};

// 添加新闻，返回添加成功的id
exports.addnews =  function (news, callback) {
  dbnews.insert(news, function (err, doc) {
    callback(err, doc);
  });
};

// 编辑准备，获取到新闻的detail和图片列表
exports.beforeedit =  function (id, callback) {
  dbnews.findOne({ _id: new ObjectID(id) }, function (err, doc) {
    callback(err, doc);
  });
};

// 删除新闻
exports.delnews =  function (news, callback) {
  dbnews.remove({ _id: new ObjectID(news.id) }, function (err) {
    callback(err);
  });
};

// 删除所有新闻
exports.delall =  function (callback) {
  dbnews.remove(function(err) {
    callback(err);
  });
};

