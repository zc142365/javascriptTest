<?php
	header("Content-Type: text/html; charset=UTF-8");
	$host="www.ggomee.com:3306";
	$user="dbuser";
	$pw="dm0123";
	$dbname="Pegasus";
	$mysqli = new mysqli($host,$user,$pw,$dbname);

	$sql= "create table noise(";
	$sql=$sql."id varchar(10) not null primary key,";
	$sql=$sql."password varchar(20) not null,";
	$sql=$sql."email varchar(100) not null,";
	$sql=$sql."brithday date not null,";
	$sql=$sql."gender varchar(6) not null);";

	if($mysqli->query($sql)){
		echo "생성완료";
	}else{
		echo "생성실패";
	}
	//table create


	$sql="insert into noise values('id123','password123','email123@email.com','1999-09-09','male');"

	
?>
