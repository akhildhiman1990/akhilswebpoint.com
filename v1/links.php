<?php
if($_REQUEST['submitlinkmail'])
{
$to='akhildhiman1990@gmail.com';
$subject = $_POST['subjectmaillink'];
$message = $_POST['messagelinkmail'];
mail($to, $subject , $message);
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Links</title>
</head>
<body>
<?php include 'background.php'; ?>
<div id="linksmaindiv" class="mainbackgrounddiv">
<?php include 'header.php'; ?>
<div id="layoutdivlinks" class="layoutindexpage">
<div id="leftsidelinksdiv" class="leftsidediv">
<div>&nbsp;</div>
<div id="linksheader">
<h1 align="center" style="color:white;"><b><i>Links</i></b></h1>
</div>
<div id="maildivlinks" class="linksdivclass" style="height:auto!important;">
<img src="Images/mail.png" style="padding:20px;" />
<div style="top:-42px;left: 120px; position:relative;">
Please Enter your Message
</div>
<div style="position:relative;top:-20px;">
<div id="messagelinkdivfom">
<form method="post" onsubmit="return linkmessagevalidate();">
<table style="color:#3399CC;">
<tr>
<td style="text-align:right;">Full Name :</td>
<td><input type="text" id="fullmnamemaillink" name="fullmnamemaillink" placeholder="Enter Your Name" /></td>
</tr>
<tr>
<td style="text-align:right;">Subject :</td>
<td><input type="text" placeholder="Enter Subject" id="subjectmaillink" name="subjectmaillink" /></td>
</tr>
<tr>
<td style="text-align:right;">Message :</td>
<td><textarea id="messagelinkmail" name="messagelinkmail"></textarea></td>
</tr>
<tr>
<td></td>
<td><input type="submit" name="submitlinkmail" id="submitlinkmail" style="height:auto; width:150px;"/></td>
</tr>
</table>
</form>
</div>
</div>
</div>
<div id="facebookdivlinks" class="linksdivclass">
<img src="Images/facebook.png.jpg" style="padding:20px;" />
<div style="top:-42px;left: 120px; position:relative;">
<a href="https://www.facebook.com/dhimanakhil1990" style="text-decoration:none; color:#3399CC" target="_blank">Profile on Facebook</a>
</div>
</div>
<div id="linkedindivlinks" class="linksdivclass">
<img src="Images/linkedin.jpg" style="padding:20px;" />
<div style="top:-42px;left: 120px; position:relative;">
<a href="http://www.linkedin.com/pub/akhil-dhiman/78/780/59b" style="text-decoration:none; color:#3399CC" target="_blank">Profile on linkedIn</a>
</div>
</div>
<div id="googleplusdivlinks" class="linksdivclass">
<img src="Images/google+.jpg" style="padding:20px;" />
<div style="top:-42px;left: 120px; position:relative;">
<a href="https://plus.google.com/111233373556408343704/posts" style="text-decoration:none; color:#3399CC" target="_blank">Profile on Google+</a>
</div>
</div>
<div id="twitterdivlinks" class="linksdivclass">
<img src="Images/twitter.jpg" style="padding:20px;" />
<div style="top:-42px;left: 120px; position:relative;">
<a href="https://twitter.com/akhildhiman1990" style="text-decoration:none; color:#3399CC" target="_blank">Profile on twitter</a>
</div>
</div>
</div>
<div id="rightsidelinksdiv" class="rightsidediv">
<?php include 'sidepanel.php'; ?>
</div>
</div>
<?php include 'footer.php'; ?>
</div>
</body>
</html>