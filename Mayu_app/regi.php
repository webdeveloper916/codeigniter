<?php

	$con = mysql_connect('localhost','tech_mayu','techrover20152515');	
	mysql_select_db("tech_mayuri", $con);
	
	$firstname=$_POST['firstname'];
	$lastname=$_POST['lastname'];
	$city=$_POST['city'];
	$email=$_POST['email'];
	$phoneno=$_POST['phoneno'];
	$username=$_POST['username'];
	$password=$_POST['password'];
	$photos=$_POST['photos'];
	
	
	
mysql_query("insert into registration(firstname, lastname, city, email, phoneno, username, password,  photos) values('{$firstname}','{$lastname}','{$city}','{$email}','{$phoneno}','{$username}','{$password}','{$photos}')");
		
		
		header("location:add_new.php?uname=".$username);
		
	
	mysql_close();
	
?>
