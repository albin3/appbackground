// Copyright © 2014 Albin. All Rights Reserved.
var model = require('./model');

exports.updatepic = function (req, res) {
  model.updatepic(req, function () {
    res.redirect('/appbg/news');
  });
};
