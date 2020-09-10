const http = require('http');
const port = 80;

const hostname = '127.0.0.1';

const app = http.createServer(
	function(req, res) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('Hello people\n');
	}
);

app.listen(port, function(err){
	if(err){
		console.log(err);
	}
	console.log('runnig for server');
});