// news view.js
var model = require('./model');

// 获取页面首页 
exports.index = function (req, res) {
  model.allnews(function (err, docs) {
    if (!err) {
      res.render('news/index', {Title: "新闻及推送", newslist: docs});
    } else {
      res.render('news/index', {Title: "新闻及推送"});
    } 
  });
};

// 更新焦点图
exports.updatepic = function (req, res) {
  model.updatepic(req, function () {
    res.redirect('/appbg/news');
  });
};

// 编辑准备，获取到商品的detail和图片信息
exports.beforeedit = function (req, res) {
  model.beforeedit(req.body.id, function (err, doc) {
    if (!err && doc) {
      res.end(JSON.stringify({
        status: true,
        detail: doc.detail,
        imgs: doc.imgs
      }));
    } else {
      res.end(JSON.stringify({status: false}));
    }
  });
};

// 编辑，更新商品
exports.editnews = function (req, res) {
  res.end(JSON.stringify({status: true}));
};

// 增加新闻，返回在数据库中的id
exports.addnews = function (req, res) {
  model.addnews(req.body, function (err, doc) {
    if (!err) {
      res.end(JSON.stringify({
        status: true,
        doc: doc
      }));
    } else {
      res.end(JSON.stringify({status: false}));
    }
  });
};

// 删除商品
exports.delnews = function (req, res) {
  model.delnews(req.body, function (err) {
    if (!err) {
      res.end(JSON.stringify({status: true}));
    } else {
      res.end(JSON.stringify({status: false}));
    } 
  });
};

// 删除所有商品
exports.delall = function (req, res) {
  model.delall(function (err) {
    if (!err) {
      res.end(JSON.stringify({status: true}));
    } else {
      res.end(JSON.stringify({status: false}));
    } 
  });
};
