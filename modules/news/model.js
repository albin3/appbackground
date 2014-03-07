// news model
var qureystring = require("querystring");
var fs = require("fs");

// 上传文件
exports.updatepic = function(req, callback)
{
  console.log(req.files);
  var newPath = "/Users/Apple5/Workspace/Albin/work/appbackground/static/img/" + req.params.picnum + ".jpg";
  console.log(newPath);
  fs.readFile(req.files.upload.path, function (err, data) {
    fs.writeFile(newPath, data, function (err) {
      console.log("wrote.");
      callback(err);
    });
  });
}
