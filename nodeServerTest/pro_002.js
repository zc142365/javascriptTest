const http = require('http');
const hostname = '127.0.0.1';
const port = 80;

const app = http.createServer(function(req,res){
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log('ip: ', ip);
	console.log('url: ', req.url);
	console.log('headers: ', req.headers);
	
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('hello\n' + JSON.stringify(req.headers,null,4));
});

app.listen(port, function(err){
	if(err){
		console.err('err');
	}
	console.log('server runinng');
})