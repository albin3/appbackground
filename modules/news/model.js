// news model
var config = require("../../config"); // 为了获取到路径
var qureystring = require("querystring");
var fs = require("fs");

// 上传文件
exports.updatepic = function(req, callback)
{
  console.log(req.files);
  var newPath = config.appPath() + "/static/img/" + req.params.picnum + ".jpg";
  console.log(newPath);
  fs.readFile(req.files.upload.path, function (err, data) {
    fs.writeFile(newPath, data, function (err) {
      fs.unlinkSync(req.files.upload.path);
      console.log(req.files.upload.path);
      callback(err);
    });
  });
}
