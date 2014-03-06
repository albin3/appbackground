// view.js 界面
var model = require('./model');

exports.signin = function (req, res) {
  res.render('account/signin',{});
};

exports.newaccount = function (req, res) {
  var account = req.body;
  model.newaccount(account, function (err, data) {
    if (err || !data) { return res.end(JSON.stringify({ status: false }));}
    else { return res.end(JSON.stringify({ status: true }));}
  });
};

exports.authenticate = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  model.authenticate({
    username: username,
    password: password
  },function (err, LastErr) {
    if (err || LastErr) {
      if (LastErr === 1) {
        return res.end("no user");
        //return res.end(JSON.stringify({status: false, message: "用户名不存在"}));
      } else if (LastErr === 2) {
        return res.end("invalid password..");
        //return res.end(JSON.stringify({status: false, message: "用户名密码不匹配"}));
      }
    } else {
      // return res.end("success..");
        res.redirect('/ourspace/hall');
    }
  });
};

exports.checksignin = function (req, res, next) {
  if (req.session!== undefined && req.session.username !== undefined) {
    next();
  } else {
    res.render('account/signin',{});
  }
};
