const fs = require('fs');

fs.unlink('tmp/hello',function(error){
	if(error){
		throw error;
	}
	console.log('successfully deleted /tmp/hello');
});