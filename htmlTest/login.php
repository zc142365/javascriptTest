<?php
	header("Content-Type: text/html; charset=UTF-8");
	$host="www.ggomee.com:3306";
	$user="dbuser";
	$pw="dm0123";
	$dbname="Pegasus";

	$mysqli = new mysqli($host, $user, $pw, $dbname);

	$id = $_POST['id'];
	$pw = $_POST['pw'];

	$sql = "select * from noise where id='$id' and password='$pw'";
	$res = $mysqli -> query($sql);
	
	if ($res->num_rows != 0) {
		echo "<script>location='index.html';</script>";
	}else{
		echo "<script>alert('아이디 또는 비밀번호가 일치하지 않습니다.'); location='login.html';</script>";
	}
?>
<script>
	
</script>