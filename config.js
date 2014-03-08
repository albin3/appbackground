// 为整个程序提供配置文件

var config = {}
config.dbinfo = {
  dburl: "localhost:27017",
  dbhost: "localhost",
  dbport: "27017",
  dbname: "appBg",
  dbpath: "mongodb://localhost:27017/appBg?w=1",
  dbmongoose: "mongodb://localhost/appBg"
};

config.appPath = function() {
  return __dirname;
};

module.exports = config;
