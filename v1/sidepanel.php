<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>SidePanel</title>
<!--<script type="text/javascript" src="Scripts/sidepanel.js"></script>-->
<script type="text/javascript" src="Scripts/jquery-1.10.2.min.js"></script>

</head>
<body>
<?php include 'background.php' ?>
<div id="sidebarid" class="sidebar">
<div>
&nbsp;
<div id="sidebaraboutme">
<div id="sidebaraboutmesheading" class="sidebarallheadings">
<h1 align="center" style="color:white;"><i>About Me</i></h1>
</div>
<div style="padding-left:5px;">
<table style="color:white;">
<tr>
<td style="text-align:center"><i>Akhil Dhiman</i></td>
</tr>
<tr>
<td><b>Email :</b></td>
</tr>
<tr>
<td>
<a href="links.php" style="color:white">akhildhiman1990@gmail.com</a></td>
</tr>
<tr>
<td>New Delhi, Delhi</td>
</tr>
<tr>
<td><a href="myapps/Akhil_Resume.docx" target="_blank" id="aboutlinkedin" style="color:white;">Akhil's Resume</a></td>
</tr>
</table>
</div>
</div>
<div id="sidebarmyapps">
<div id="sidebarmyappsheading" class="sidebarallheadings">
<h2 align="center" style="color:white;"><i>My Apps</i></h2>
</div>
<ul id="workedatmyapps" class="ulsidebarall">
<!--<li style="border-top:2px solid white!important;border-bottom:2px solid white!important;" onclick="window.open('myapps/myweatherapp/');">
My Weather App
</li>-->
</ul>
</div>
<div id="sidebarprojectacomp">
<div id="sidebarprojectacompheading" class="sidebarallheadings">
<h2 align="center" style="color:white;"><i>Project Accomplished</i></h2>
</div>
<table>
<ul id="projectacompul" class="ulsidebarall">
</ul>
</table>
</div>
<div id="sidebarreachmeat">
<div id="sidebarreachmeatheading" class="sidebarallheadings">
<h2 align="center" style="color:white;"><i>Reach Me At</i></h2></div>
<table>
<ul id="reachmeul" class="ulsidebarall">
</ul>
</table>
</div>
<div id="sidebarworkedat">
<div id="sidebarworkedatheading" class="sidebarallheadings">
<h1 align="center" style="color:white;"><i>Worked At</i></h1>
</div>
<table>
<ul id="workedat" class="ulsidebarall">
</ul>
</table>
</div>
</div>
</div>
<script type="text/javascript" src="Scripts/jsondataressidepanel.js"></script>
</body>
</html>