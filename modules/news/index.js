// account 模块
var view = require('./view');

exports.register = function (app) {
  app.get('/appbg/news', function (req, res) {
    res.render('news/index', {Title: "新闻及推送"});
  });
  app.post('/appbg/news/updatepic/:picnum', view.updatepic);
};
