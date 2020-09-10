const fs = require('fs');

fs.open('./test.txt','a',function(error,fd){
	if(error){
		throw error;
	}

	fs.write(fd,'Update',4,function(error,written){
		if(error){
			throw error;
		}
		console.log(written + '바이트');

		fs.close(fd,function(){
			console.log('완료 후 종료');
		});
	});
});