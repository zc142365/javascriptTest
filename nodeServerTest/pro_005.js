const qs = require('querystring');
const http = require('http');

const post_data = qs.stringify({
	'key1': 'val1', 'key2': 'val2',
});

const post_options = {
	host: 'posttestserver.com',
	port: '80',
	path: '/post.php',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': post_data.length
	}
};

const post_req = http.request(post_options,
	function(res){
		res.setEncoding('utf8');
		res.on('data',
			function(chunk){
				console.log('Response: ' + chunk);
			});
});

post_req.write(post_data);
post_req.end();