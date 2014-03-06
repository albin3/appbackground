// modules 模块，是所有模块的对外接口
var fs = require('fs');

var modulespath = "./modules/";
var m = {};
// 检测当前目录下的模块，加依次载
m.registers = function (app) {
  var files = fs.readdirSync(modulespath);
  // 优先加载用户登陆控制的模块
  require("./account").register(app);
  files.forEach(function(file) {
    stat = fs.lstatSync(modulespath + "/" + file);
    if (stat !== undefined && stat.isDirectory() && file !== "account") {
      require("./" + file).register(app);
    }
  });
};

// 将m作为对外接口
module.exports = m;
