<?php 
$host = "localhost";
$user = "root";
$password = "";
$dbname = "akhilswebpoint";
$connect = mysql_connect($host,$user,$password) or die("host error") ;
$dbconnect = mysql_select_db($dbname,$connect) or die("database error");
if($_POST['submitcontact'])
{
	$fullname = $_POST['fullnamecontact'];
	$address = $_POST['textaddresscontact'];
	$gender = $_POST['genderddval'];
	$cno = $_POST['cnocontact'];
	$dobval = $_POST['dobhiddenval'];
	$email = $_POST['emailcontact'];
	$msgval = $_POST['messagetextarea'];
	$query="INSERT INTO  contactmedata(ctcfullname,ctcaddress,ctcgender,ctcno,ctcdob,ctcemail,ctcmessage,date_created)
VALUES ('$fullname','$address','$gender','$cno','$dobval','$email','$msgval', NOW( ));";
 $to='akhildhiman1990@gmail.com';
 $message = $_POST['messagetextarea'];
mail($to, 'New Query', $message);
$result=mysql_query($query);
if($result)
$msg="Submitted Successfully!!!";
else
$msg="An Error has Occured!!! Try again later";
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact Me</title>
</head>
<body>
<?php include 'background.php'; ?>
<div id="contactmemaindiv" class="mainbackgrounddiv">
<?php include 'header.php'; ?>
<div id="layoutdivcontactme" class="layoutindexpage">
<div id="leftsidecontactmediv" class="leftsidediv">
<div>
&nbsp;
<div style="color:white;">
<h1 align="center"><i>Contact Me</i></h1>
</div><br />
<div id="main-contact-div-id" style="left:90px;">
<form id="cmeform" method="post" onsubmit="return contactmevalidate();">
<table>
<tr>
<td style="text-align:right;">Full Name :</td>
<td><input type="text" id="fullnamecontact" name="fullnamecontact" maxlength="50" placeholder="Enter Your Full Name" /></td>
</tr>
<tr>
<td style="text-align:right;">Address :</td>
<td><textarea id="textaddresscontact" name="textaddresscontact"></textarea></td>
</tr>
<tr>
<td style="text-align:right;">Gender :</td>
<td>
<input type="hidden" id="genderddval" name="genderddval" />
<select id="genderdd" name="genderdd" onchange="setcontactvalues();">
<option id="male" value="Male">Male</option>
<option id="female" value="Female">Female</option>
</select></td>
</tr>
<tr>
<td style="text-align:right;">Contact No :</td>
<td><input type="text" id="cnocontact" name="cnocontact" maxlength="10" placeholder="Enter Your Contact No." onkeypress="numeric(event);" /></td>
</tr>
<tr>
<td style="text-align:right;">D.O.B. :</td>
<td>
<input type="hidden" id="dobhiddenval" name="dobhiddenval" />
<select id="yearfield" onchange="yearselect();setcontactvalues();" name="dob"></select><select id="monthfield" name="dob" onchange="yearselect();setcontactvalues();"></select><select id="dayfield" name="dob" onchange="setcontactvalues();"></select></td>
</tr>
<tr>
<td style="text-align:right;">E-mail :</td>
<td><input type="text" id="emailcontact" name="emailcontact" placeholder="example@example.com" /></td>
</tr>
<tr>
<td style="text-align:right;">Message :</td>
<td><textarea id="messagetextarea" name="messagetextarea"></textarea></td>
</tr>
<tr>
<td></td>
<td><input type="submit" name="submitcontact" value="Submit" style="height:auto; width:150px;" /></td>
</tr>
</table>
</form>
<?php if(isset($msg)) echo $msg; ?>
<script type="text/javascript" src="Scripts/dobsel.js"></script>
</div>
</div>
</div>
<div id="rightsidecontactmediv" class="rightsidediv">
<?php include 'sidepanel.php'; ?>
</div>
</div>
<?php include 'footer.php'; ?>
</div>
</body>
</html>