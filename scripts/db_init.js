// Copyright © 2014 Albin. All Rights Reserved.
// 配置系统环境，在mongodb中写入初始化信息
// 包括设置用户名唯一索引等...

var config = require('../config');
    MongoClient = require('mongodb'),
    password_hash = require('password-hash');

// 建立后台用户的唯一索引
MongoClient.connect(config.dbinfo.dbpath, function (err, db) {
      

      // 清空数据库
      db.dropDatabase(function () {
        var dbaccount = db.collection('account');

        // 建索引
        dbaccount.ensureIndex({ username: 1 },
          { unique: true, dropDups: true },
          function (err) {
            if (err) { 
              console.log(err.message); 
            } else { 
              console.log("create unique index success"); 
            }
            db.close();
          }
          );
      });
});

// appuser 唯一tel索引
MongoClient.connect("mongodb://" + config.dbinfo.dbhost + ":" + config.dbinfo.dbport 
    + "/" + config.dbinfo.dbname + "?w=1", function (err, db) {
      var dbaccount = db.collection('appuser');

      // 建索引
      dbaccount.ensureIndex({ loginname: 1 },
        { unique: true, dropDups: true },
        function (err) {
          if (err) { 
            console.log(err.message); 
          } else { 
            console.log("create unique index success"); 
          }
          db.close();
      });
});

/*
// appuser 唯一email索引
MongoClient.connect("mongodb://" + config.dbinfo.dbhost + ":" + config.dbinfo.dbport 
    + "/" + config.dbinfo.dbname + "?w=1", function (err, db) {
      var dbaccount = db.collection('appuser');

      // 建索引
      dbaccount.ensureIndex({ email: 1 },
        { unique: true, dropDups: true },
        function (err) {
          if (err) { 
            console.log(err.message); 
          } else { 
            console.log("create unique index success"); 
          }
          db.close();
      });
});
*/

