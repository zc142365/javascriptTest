var n = 1260;
var count = 0;

var coin_types = [500,100,50,10];

for(var i of coin_types){
	
	count = parseInt(n/i);
	n = n % i;
	console.log(`${i}원으로 거슬러 줘야할 개수 ${count}개 남은돈:${n}`);	
}