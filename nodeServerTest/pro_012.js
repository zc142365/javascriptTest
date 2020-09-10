const fs = require('fs');

fs.stat('text.txt',function(error,stat){ //stat는 상태를 보는 명령어
	if(error){
		console.log('고자');
		return;
	}
	console.log(stat);
});