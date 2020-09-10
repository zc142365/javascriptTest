const fs = require('fs');
// tempdir 이라는 이름의 디렉토리를 생성합니다.
fs.mkdir('tempdir',( e )=>{
	if( e ){
		throw e;
	}
	// 생성후에는 메시지를 화면에 출력합니다.
	console.log( 'Created!', e);
});

// 디렉토리내의 파일 목록을 읽어옵니다.
fs.rmdir('tempdir',( err , files )=>{
	if( err ){
		throw err;
	}

	// 생성후에는 메시지를 화면에 출력합니다.
	console.log( err );
});

var fs = require('fs');

// 디렉토리내의 파일 목록을 읽어옵니다.
fs.readdir('tempdir',( err , files )=>{
	if( err ){
		throw err;
	}
	// 파일목록을 출력합니다.
	console.log( files );
});