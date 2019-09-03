<?php 
$host = "localhost";
$user = "root";
$password = "";
$dbname = "akhilswebpoint";
$connect = mysql_connect($host,$user,$password) or die("host error") ;
$dbconnect = mysql_select_db($dbname,$connect) or die("database error");

if($_POST['submit'])
{
$username = $_POST['uname'];
$pass = $_POST['pass'];
$fullname = $_POST['fullname'];
$email = $_POST['email'];
$cno = $_POST['cno'];
$query="INSERT INTO  adminreg(uname,pass,fname,email,cno,created_date)
VALUES ('$username','$pass','$fullname','$email','$cno', NOW( ));";
$result=mysql_query($query);
if($result)
$msg="User Created";
else
$msg="Unable to Create User";
}
session_start();
$sid=session_id();
$validation=mysql_query("select * from adminreg where session_id='$sid'");

$chkrow=mysql_num_rows($validation);
		if($chkrow==0 )
		{
				header('location:admin.php');
				
		}
		
		if($_REQUEST['logout'])
{
	$qry_update=mysql_query("update adminreg set session_id='' where  session_id='$sid' ");
	header('location:admin.php');
}
if(isset($_POST['submitupdate']))
{
$useridupdate=$_POST['unameupdate'];
$oldpass=$_POST['oldpassupdate'];
$newpass=$_POST['newpassupdate'];
$queryupdate="update adminreg set pass='$newpass' where uname='$useridupdate' and pass='$oldpass'"; 
$dataupdate=mysql_query($queryupdate);
if($dataupdate)
$msg1= "Password Successfully Changed";
else
$msg1="Invalid Password";

}
if(isset($_POST['submitdelete']))
{
$useriddelete=$_POST['unamedelete'];
$passdelete=$_POST['passdelete'];
$querydelete="delete from adminreg where uname='$useriddelete' and pass='$passdelete'";
$datadelete=mysql_query($querydelete);
if($datadelete)
{
$msg2="Record Successfully Delete";
}
else
 {
	 $msg2="Unable to Delete Record";
 }
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Admin Database</title>
</head>
<body>
<?php include 'background.php' ?>
<div id="admindivmain" class="mainbackgrounddiv">
<?php include 'headeradmin.php' ?>
<div id="admin-database">
<form id="logoutform" name="logoutform" method="post">
<input type="submit" id="logout" name="logout" value="LOGOUT" style="float:right;" />
</form>
</div>
<div id="createuserdivadmin" class="userdivadmin">
<p style="font-family:'Times New Roman', Times, serif;"><h1 style="color:white;" align="center"><i>Create User Section</i></h1></p>
<form id="admindb" name="admindb" method="post" onsubmit="return createuserdivadminvalidate()">
<table>
<tr>
<td style="text-align:right;color:white;">User Name :</td>
<td><input type="text" placeholder="User Name" id="uname" name="uname" /></td>
</tr>
<tr>
<td style="text-align:right;color:white;">Password :</td>
<td><input type="password" placeholder="Password" id="pass" name="pass" /></td>
</tr>
<tr>
<td style="text-align:right;color:white;">Email :</td>
<td><input type="text" id="email" name="email" placeholder="example@example.com" /></td>
</tr>
<tr>
<td style="text-align:right;color:white;">Contact No :</td>
<td><input type="text" id="cno" name="cno" maxlength="10" onkeypress="numeric(event)" placeholder="Mobile No." /></td>
</tr>
<tr>
<td></td>
<td align="center"><input type="submit" id="submit" name="submit" value="Create User" style="height:auto; width:150px;" /></td></tr>
</table>
</form>
<font style="color:white;"><?php if(isset($msg)) echo $msg; ?></font>
</div>
<div id="updateuserdetails" class="userdivadmin" style="margin-top:20px!important;">
<p style="font-family:'Times New Roman', Times, serif;"><h1 style="color:white;" align="center"><i>Change Password Section</i></h1></p>
<form id="updateform" method="post" onsubmit="return updatepasswordadminsection();">
<table style="color:white;">
<tr>
<td style="text-align:right;">User Name :</td>
<td><input type="text" id="unameupdate" name="unameupdate" placeholder="Enter Ur User Name" /></td>
</tr>
<tr>
<td style="text-align:right;">Old Password :</td>
<td><input type="password" id="oldpassupdate" name="oldpassupdate" placeholder="Enter Ur Old Password" /></td>
</tr>
<tr>
<td style="text-align:right;">New Password :</td>
<td><input type="password" id="newpassupdate" name="newpassupdate" placeholder="Enter Ur New Password" /></td>
</tr>
<tr>
<td style="text-align:right;">Verify Password :</td>
<td><input type="password" id="verifypassupdate" name="verifypassupdate" placeholder="Enter Ur New Password" /></td>
</tr>
<tr>
<td></td>
<td><input type="submit" id="submitupdate" name="submitupdate" value="Update Password" style="height:auto; width:150px;" /></td>
</tr>
</table>
</form>
<font color="#FFFFFF"><?php echo $msg1 ?></font>
</div>
<div id="deleteuser" class="userdivadmin" style="margin-top:20px!important;">
<p style="font-family:'Times New Roman', Times, serif;"><h1 style="color:white;" align="center"><i>Delete User Section</i></h1></p>
<form id="deleteuser" method="post" onsubmit="return deleteuservalid();">
<table style="color:white;">
<tr>
<td style="text-align:right;">User Name :</td>
<td><input type="text" id="unamedelete" name="unamedelete" placeholder="Enter U-Name to Delete" /></td>
</tr>
<tr>
<td style="text-align:right;">Password :</td>
<td><input type="password" id="passdelete" name="passdelete" placeholder="Enter Password" /></td>
</tr>
<tr>
<td></td>
<td><input type="submit" id="submitdelete" name="submitdelete" value="Delete User" style="height:auto; width:150px;" /></td>
</tr>
</table>
</form>
<font color="#FFFFFF"><?php echo $msg2 ?></font>
</div>
<?php include 'footer.php' ?>
</div>
</body>
</html>