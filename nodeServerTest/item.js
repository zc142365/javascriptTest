let list = [1,2,3];

module.exports = function(){
	for(let i = 0; i<list.length; i++){
		list[i] *= 2;
	}
	return list;
};
