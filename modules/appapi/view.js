// appapi view
var model = require('./model');

exports.newuser = function (req, res) {
  model.newuser(req.body, function (err, data) {
    if (err) {
      res.end(JSON.stringify({status: false}));
    } else {
      res.end(JSON.stringify({status: true}));
    }
  });
};
