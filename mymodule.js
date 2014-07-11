var fs = require('fs');

module.exports = function(directory, fileextension, callback){
	var pat = RegExp('\\.' + fileextension + '$');
	fs.readdir(directory, function(err, files){
		if(err){
			callback(err);
		}
		else{
			result = []
			for (i = 0; i < files.length; i++) {
        		if (pat.test(files[i])) {
          			result.push(files[i]);
        		}
      		}
      		callback(null, result);
		}
	});

};