const fs = require('fs'); //이 파일은 createWriteStream을 반복해서 사용한 프로그램이다

var str = [];
for(let j = 0; j<5; j++){
	str += '1';
}
const writeopen = fs.createWriteStream('test.txt',{flags: 'w+'});
writeopen.on('open',function(data){
	console.log('open: ',data);
	setTimeout(function(){
		console.log('start');
		
		for(let i=0; i<5; i++){
			writeopen.write(str);
		}
		console.log('end');
	},0);
	
	setTimeout(function(){
		console.log('Test2');
	});
	
	console.log('Test1');
	setTimeout(function(){
		writeopen.end(function(){
			console.log('File close')
		});
	},10000);
});

