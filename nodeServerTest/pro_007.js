const fs = require('fs');

fs.writeFile('test.txt','',function(error){
	if(error){
		throw error;
	}
	console.log('성공');
})