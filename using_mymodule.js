var ls = require('./mymodule.js');

var directory = process.argv[2];
var extension = process.argv[3];

ls(directory, extension, function(err, files){
	for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});