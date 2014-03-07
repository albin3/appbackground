var config = require('../../config'),
    MongoClient = require('mongodb'),
    password_hash = require('password-hash');
var coll_name = 'account';

// 注册新用户
exports.newaccount = function (account, callback) {
  MongoClient.connect(config.dbinfo.dbpath, function (err, db) {
    var dbAccount = db.collection(coll_name);
    account.password = password_hash.generate(account.password);
    dbAccount.insert(account, function (err, data) {
      db.close();
      if (err || !data) { callback(err,null) }
      else { callback(null, data); }
    });
  });
};

// 验证用户密码
exports.authenticate = function(user, callback) {
  MongoClient.connect(config.dbinfo.dbpath, function (err, db) {
    var dbAccount = db.collection(coll_name);
    dbAccount.findOne({
      username: user.username
    }, function(err, doc) {
      db.close();
      if (err || !doc) {
        return callback(err, 1); // 没有用户
      }
      if (password_hash.verify(user.password, doc.password)) {
        return callback(null);
      } else {
        return callback(err, 2);       // 密码不正确
      }
    });
  });
};
