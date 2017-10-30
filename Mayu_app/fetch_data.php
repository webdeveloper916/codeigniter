<?php
	$con = mysql_connect('www.techroversolutions.com','tech_mayu','techrover20152515');	
	mysql_select_db("tech_mayuri", $con);
	
	$username=$_POST['username'];
	$password=$_POST['password'];

        $query=mysql_query("SELECT * from registration WHERE username='$username' && password='$password'");
	$num=mysql_num_rows($query);

        if($num==1)
	{
           while($list=mysql_fetch_assoc($query))
	        {
		     $output=$list;
		}
        }
	else
	    {
               $output['username']=0;
	    }
	mysql_close();

    ?>

