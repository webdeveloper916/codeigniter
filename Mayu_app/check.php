<?php  
$un=$_POST['username'];  
$pw=$_POST['password'];  

$user = ‘tech_mayu’;  
$pswd = ‘techrover20152515’;  
$db = ‘tech_mayuri’;  
$conn = mysql_connect(‘localhost’, $user, $pswd);  
mysql_select_db($db, $conn);  

$query = “SELECT * FROM registration WHERE username = ‘$un’ AND password = ‘$pw’”;  
 
if(mysql_num_rows($result) --> 0)  

echo 1;   
else  
echo 0;
?>  