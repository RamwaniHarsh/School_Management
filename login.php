<?php
$dbhost = 'localhost';
$dbuser = 'root';
$dbpass = '';
$dbname = 'project';

$user = $_POST['user'];
$pass = $_POST['pass'];

$con=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
if($con===false)
{
	die(mysqli_error());
}

$result = mysqli_query($con,"select username,password from login where username = '$user' and password = '$pass'") or die("Failed to Query".mysql_error());
$row = mysqli_fetch_array($result);
if($row['username'] == $user && $row['password'] == $pass ){
	header("Location:dashboard.html");
}else{
	echo "hii";
	header("Location:index.html");
}
?>