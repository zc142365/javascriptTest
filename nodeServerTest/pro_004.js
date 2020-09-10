const http = require('http');
const port = 80;
const hostname = '127.0.0.1';

http.get('http://google.co.kr/',
		function(res){
			let body = '';
			res.on('data',(d)=>{
				body += d;
			});
			res.on('end',
				function(){
				console.log('DATA: ',body);
			});
		}).on('error',
			 function(e){
			  	console.log('error',e);
			  });
