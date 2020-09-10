const fs = require('fs');

const fd = fs.createWriteStream('test.txt',{flags:'a'});

fd.on('open',function(){
	fd.write('Data');
	fd.end(function(){
		console.log('end');
	});
});