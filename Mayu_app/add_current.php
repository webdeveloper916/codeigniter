<?php
	$con = mysql_connect('localhost','tech_mayu','techrover20152515');	
	mysql_select_db("tech_mayuri", $con);

	$email = $_REQUEST['email'];
	$stdt = $_POST['startdate'];
	$endt = $_POST['stopdate'];
	$tra = $_POST['t_nanme'];
	$rat = $_POST['r_value'];
	
	$up = "update registration set st_date='$stdt',en_date='$endt',trainer='$tra',rating='$rat' where email='$email'";
	$ex = mysql_query($up);

	mysql_close($con);
?>