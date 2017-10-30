<?php
	$con = mysql_connect('localhost','tech_mayu','techrover20152515');	
	mysql_select_db("tech_mayuri", $con);
	


    $uname = $_REQUEST['uname'];
	
    $date = $_POST['date'];
    $chk = $_POST['c_data'];

	
	mysql_query("update registration set int_sub='$chk', p_date='$date' where username='$uname'");

	
?>