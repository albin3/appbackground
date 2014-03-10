// account 模块
var view = require('./view');

exports.register = function (app) {
  app.get('/appbg/news', view.index);
  app.post('/appbg/news/updatepic/:picnum', view.updatepic);
  app.post('/appbg/news/beforeedit', view.beforeedit);
  app.post('/appbg/news/edit', view.editnews);
  app.post('/appbg/news/add', view.addnews);
  app.post('/appbg/news/del', view.delnews);
  app.post('/appbg/news/delall', view.delall);
};
