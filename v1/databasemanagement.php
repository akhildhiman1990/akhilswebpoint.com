<?php 
$host = "localhost";
$user = "root";
$password = "";
$dbname = "akhilswebpoint";
$connect = mysql_connect($host,$user,$password) or die("host error") ;
$dbconnect = mysql_select_db($dbname,$connect) or die("database error");
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
$querycontactme="SELECT * FROM contactmedata";
$datacontactme=mysql_query($querycontactme);
if(isset($_POST['submitdeletebutton']))
{
$deletecontactid=$_POST['deletecontactid'];
$querydelete="delete from contactmedata where id='$deletecontactid'";
$datadelete=mysql_query($querydelete);
$msg2="Record Successfully Delete";
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Database Management</title>
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
<div id="databasesectionmainadmin">
<div id="upperdatabasesectionmainadmin" class="bothdatabasesectionmainadmin">
<div id="upperleftdivdatabasesection" class="bothupperdivdatabasesection">
<h2 align="center" style="color:white;"><i>Admin Authorities</i></h2>
<img src="Images/Admin.gif" style="height:150px; width:300px; position:relative; left:33px;" />
<p id="adminauthorities" style="padding:15px; top:-30px;position:relative; font-family:'Times New Roman', Times, serif; font-size:30px; color:white;">In this Section we can give and take admin rights from any user.</p>
<a href="admindatabase.php" id="adminanchortaglink" style="position:relative; top:-50px;left:20px;text-decoration: none;color: white;">Click here for admin section</a>
</div>
<div id="upperrightdivdatabasesection" class="bothupperdivdatabasesection">
<h2 align="center" style="color:white;"><i>View Contact data</i></h2>
<div style="position:relative; left:140px;">
<img src="Images/contactusatcomfortthong.png" height="100px" width="100px" />
</div>
<div style="position:relative; top:30px; left:8px; padding:20px;">
<form id="deletecontactdata" name="deletecontactdata" method="post" onsubmit="return deletecontactvalid();">
<table style="text-align:right; color:white;">
<tr>
<td>Enter Id to Delete Data :</td>
<td><input type="text" id="deletecontactid" name="deletecontactid" placeholder="Enter ID" /></td>
</tr>
<tr>
<td></td>
<td>
<input type="submit" id="submitdeletebutton" name="submitdeletebutton" value="Click to Delete" style="height:auto; width:150px;" />
</td>
</tr>
</table>
</form>
<font color="#FFFFFF"><?php echo $msg2 ?></font>
</div>
</div>
</div>
<div id="lowerdatabasesectionmainadmin"class="bothdatabasesectionmainadmin">
<!--<div id="lowerleftdivdatabasesection" class="bothlowerdivdatabasesection"></div>
<div id="lowerrightdivdatabasesection" class="bothlowerdivdatabasesection"></div>-->
<div id="onedivlowerdivdatabasesection" class="bothlowerdivdatabasesection" style="width:auto;height:360px;padding:20px;">
<?php 
echo "<table border='1'>";
echo "<tr>";
echo "<td>Sr No.</td>";
echo "<td>Full Name</td>";
echo "<td>Address</td>"; 
echo "<td>Gender</td>"; 
echo "<td>Contact No</td>"; 
echo "<td>Date Of Birth</td>"; 
echo "<td>E-mail</td>"; 
echo "<td>Message</td>"; 
echo "</tr>";
echo "<tr>";
while($resultcontactme=mysql_fetch_array($datacontactme))
{ 
echo "<td>$resultcontactme[0]</td>";
echo "<td>$resultcontactme[1]</td>";
echo "<td>$resultcontactme[2]</td>"; 
echo "<td>$resultcontactme[3]</td>"; 
echo "<td>$resultcontactme[4]</td>"; 
echo "<td>$resultcontactme[5]</td>"; 
echo "<td>$resultcontactme[6]</td>"; 
echo "<td>$resultcontactme[7]</td>"; 
}
echo "</tr>";
echo "</table>";
?>
</div>
</div>
</div>
<?php include 'footer.php' ?>
</div>
</body>
</html>