// Copyright © 2014 Albin. All Rights Reserved.
var model = require("./model");

exports.userctrl = function (req, res) {

  model.alluser(function(err, docs) {
    if (err || docs.length === 0) {
      return res.render('userctrl/index', { Title: "App用户管理" });
    }
    return res.render('userctrl/index', { Title: "App用户管理" });
  });
};
