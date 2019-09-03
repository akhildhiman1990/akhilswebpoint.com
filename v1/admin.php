<?php 
$host = "localhost";
$user = "root";
$password = "";
$dbname = "akhilswebpoint";
$connect = mysql_connect($host,$user,$password) or die("host error") ;
$dbconnect = mysql_select_db($dbname,$connect) or die("database error");
session_start();
$sid=session_id();
if($_REQUEST['submit'])
{
	
	$uname=$_REQUEST['uname'];
		$pass=$_REQUEST['pass'];
		$chk=mysql_query("select * from adminreg where uname='$uname' and pass='$pass'");
		$chkrow=mysql_num_rows($chk);
		if($chkrow >0 )
		{
		$qry_update=mysql_query("update adminreg set session_id='$sid' where  uname='$uname' and pass='$pass' ");
		header('location:databasemanagement.php');
		}
		else 
		{
		$msg="Username/Password is Invalid";	
			
		}
	
}
$validationlogin=mysql_query("select * from adminreg where session_id='$sid'");
$chkrowlogin=mysql_num_rows($validationlogin);
		if($chkrowlogin>0 )
		{
				header('location:databasemanagement.php');
				
		}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Admin</title>
</head>
<body>
<?php include 'background.php' ?>
<div id="admindivmain" class="mainbackgrounddiv">
<?php include 'headeradmin.php' ?>
<div id="loginsectionmainadmin">
<div style="position:relative;top:50px;"><h1 align="center" style="color:#3399CC"><i>Welcome Admin</i></h1></div>
<div id="loginsectionadmin" style="text-align:center; color:white">
<form id="loginadmin" name="loginadmin" method="post">
<table align="center";>
<tr>
<td style="text-align:right;">UserName :</td>
<td><input type="text" id="uname" name="uname" placeholder="Enter Your User Name"  /></td>
</tr>
<tr>
<td style="text-align:right;">Password :</td>
<td><input type="password" placeholder="Enter Your Password" id="pass" name="pass" /></td>
</tr>
<tr>
<td></td>
<td><input type="submit" id="submit" name="submit" value="Submit" style="height:auto; width:150px;" /></td>
</tr>
</table>
<font color="#FFFFFF"><?php echo $msg ;?></font>
</form>
</div>
</div>
<?php include 'footer.php' ?>
</div>
</body>
</html>