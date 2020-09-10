const fs = require('fs');

fs.writeFile('test.txt','Hello',function(error){
	if(error){
		throw error;
	}
	
	setTimeout(function(){
		fs.rename('test.txt','text.txt',function(){
			console.log('file renamed');
		});
	},1000*10);
	
});


