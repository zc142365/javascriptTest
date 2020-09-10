const data = require('./data.js');
const ServerFunction = function(){
	data.main();
	conolse.log(data.list);
};

ServerFunction.createServer();