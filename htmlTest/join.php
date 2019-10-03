<?php
	header("Content-Type: text/html; charset=UTF-8");
	$host="www.ggomee.com:3306";
	$user="dbuser";
	$pw="dm0123";
	$dbname="Pegasus";

	$mysqli = new mysqli($host, $user, $pw, $dbname);

	$id = $_POST['id'];
	$pw = $_POST['pw'];
	$email = $_POST['email'];
	$birthday = $_POST['birthday'];
	$gender = $_POST['gender'];

	$sql = "insert into noise values('$id','$pw','$email','$birthday','$gender');";

	if ($mysqli->query($sql)) {
		echo "<script>alert('가입 되셨습니다.'); location.href='index.html';</script>";
	}else{
		echo "<script>alert('가입을 실패하셨습니다.'); location.href='join.html';</script>";
	}
?>