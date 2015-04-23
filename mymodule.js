var fs = require('fs')

module.exports = function(dirname, filter, callback){
  var regex = new RegExp('\\.' + filter + '$')
  var filelist = new Array()
  var i = 0

  fs.readdir(dirname, function (err, list){
    if(err){
      return callback(err);
    }
    else list.forEach(function(file){
      if (regex.test(file))
        filelist[i]=file;
        i += 1;
    })
    return callback(null, filelist)
  })
};
