/**
 * @author Akhil
 */
var sitehost = window.location.host;
var pathname = window.location.pathname;
var properurl = sitehost+pathname;
if(window.location.href.indexOf("index.php") != -1)
{
	var list = document.getElementById("li0");
	if(list)
	list.setAttribute("class", "newclasschangecolorli");	
}
else if(window.location.href.indexOf("aboutme.php") != -1)
{
	var list = document.getElementById("li1");
	if(list)
	list.setAttribute("class", "newclasschangecolorli");	
}
else if(window.location.href.indexOf("projects.php") != -1)
{
	var list = document.getElementById("li2");
	if(list)
	list.setAttribute("class", "newclasschangecolorli");	
}
else if(window.location.href.indexOf("education.php") != -1)
{
	var list = document.getElementById("li3");
	if(list)
	list.setAttribute("class", "newclasschangecolorli");	
}
else if(window.location.href.indexOf("contactme.php") != -1)
{
	var list = document.getElementById("li4");
	if(list)
	list.setAttribute("class", "newclasschangecolorli");	
}
else if(window.location.href.indexOf("links.php") != -1)
{
	var list = document.getElementById("li5");
	if(list)
	list.setAttribute("class", "newclasschangecolorli");	
}
else
{
	var list = document.getElementById("li0");
	if(list)
	list.setAttribute("class", "newclasschangecolorli");	
}
function changecolor(ctrl)
{
	 var list = document.getElementById("menu").getElementsByTagName('li');
        
        for(i=0; i<list.length; i++)
        {
            list[i].style.background = '#3399CC';
        }
        ctrl.style.background = 'lightblue';
		ctrl.style.borderBottom = '1px solid lightblue';
}
function deleteuservalid()
{
	var uname = document.getElementById("unamedelete").value;
	var pass = document.getElementById("passdelete").value;
	if(uname==null || uname=="")
	{
		alert("Please Enter a Valid UserName");
		document.getElementById("unamedelete").focus();
		return false;
	}
	else if(pass==null || pass=="")
	{
		alert("Please Enter a Valid Password");
		document.getElementById("passdelete").focus();
		return false;
	}
	else
	{
		//alert("User Deleted");
		return true;
	}
}
function updatepasswordadminsection()
{
	var uname = document.getElementById("unameupdate").value;
	var oldpass = document.getElementById("oldpassupdate").value;
	var newpass = document.getElementById("newpassupdate").value;
	var verpass = document.getElementById("verifypassupdate").value;
	if(uname==null || uname=="")
	{
		alert("Please Enter a Valid UserName");
		document.getElementById("unameupdate").focus();
		return false;	
	}
	else if(oldpass==null || oldpass=="")
	{
		alert("Please Enter Old Password");
		document.getElementById("oldpassupdate").focus();
		return false;
	}
	else if(newpass==null || newpass=="")
	{
		alert("Please Enter New Password");
		document.getElementById("newpassupdate").focus();
		return false;
	}
	else if(verpass != newpass)
	{
		alert("Password Must be Same");
		document.getElementById("verifypassupdate").focus();
		return false;
	}
}
function numeric(event){
   /* var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) 
            theEvent.preventDefault();
    }*/
	var KeyBoardCode = (event.which) ? event.which : event.keyCode; 
    if (KeyBoardCode > 31 && (KeyBoardCode < 48 || KeyBoardCode > 57)) {
		event.preventDefault()
        return false;
    }
        return true;
}
function contactmevalidate()
{
	var fullname = document.getElementById("fullnamecontact").value;
	var address = document.getElementById("textaddresscontact").value;
	var cno = document.getElementById("cnocontact").value;
	var email = document.getElementById("emailcontact").value;
	var message = document.getElementById("messagetextarea").value;
	if (fullname==null || fullname=="")
  	{
 	 	alert("Please Enter Your Name");
		document.getElementById("fullnamecontact").focus();
 		return false;
  	}
	else if(address==null || address=="")
	{
		alert("Please Enter Your Address");
		document.getElementById("textaddresscontact").focus();
		return false;
	}
	else if(cno==null || cno=="" || cno.length < 10)
	{
		alert("Please Enter valid Contact No.");
		document.getElementById("cnocontact").focus();
		return false;
	}
	else if(message==null || message=="")
	{
		alert("Please Enter Your Message");	
		document.getElementById("messagetextarea").focus();
		return false;
	}
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
  	{
 		alert("Email is Invalid");
		document.getElementById("emailcontact").focus();
  		return false;
  	}	
	else
	{
		alert("Submitted Successfully!!!!");
		return true;
	}
}
/*
var ulcolorchange = document.getElementById('menu');
ulcolorchange.onclick = function(event){
	var targetitem = event.target;
	alert(targetitem.className);
	targetitem.setAttribute("class", "newclasschangecolorli");
	alert(targetitem.className);
}*/
function linkmessagevalidate()
{
	var fullname = document.getElementById("fullmnamemaillink").value;
	var subject = document.getElementById("subjectmaillink").value;
	var message = document.getElementById("messagelinkmail").value;
	if(fullname==null || fullname=="")
	{
		alert("Please Enter Your Name");
		document.getElementById("fullmnamemaillink").focus();
		return false;	
	}
	else if(subject==null || subject=="")
	{
		alert("Please Enter Subject");
		document.getElementById("subjectmaillink").focus();
		return false;
	}
	else if(message==null || message=="")
	{
		alert("Please Enter Message");
		document.getElementById("messagelinkmail").focus();
		return false;
	}
}
function createuserdivadminvalidate()
{
	var uname = document.getElementById("uname").value;
	var password = document.getElementById("pass").value;
	var email = document.getElementById("email").value;
	var cno = document.getElementById("cno").value;
	if(uname==null || uname=="")
	{
		alert("Please Enter UserName");
		document.getElementById("uname").focus();
		return false;
	}
	else if(password==null || password=="")
	{
		alert("Invalid Password");
		document.getElementById("pass").focus();
		return false;
	}
	else if(cno==null || cno=="" || cno.length < 10)
	{
		alert("Please Enter valid Contact No.");
		document.getElementById("cno").focus();
		return false;
	}
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
  	{
 		alert("Email is Invalid");
		document.getElementById("email").focus();
  		return false;
  	}	
	else
	{
		alert("else part");
		return false;	
	}
}
function deletecontactvalid()
{
	var id = document.getElementById("deletecontactid").value;
	if(id==null || id=="")
	{
		alert("Please Enter Id to Delete");
		document.getElementById("deletecontactid").focus();
		return false;
	}
}
function setcontactvalues()
{
	var gendervalue = document.getElementById("genderdd").value;
	var hiddengender = document.getElementById("genderddval");
	hiddengender.value = gendervalue;
	var dateval = document.getElementById("dayfield").value;
	var monthval = document.getElementById("monthfield").value;
	var yearval = document.getElementById("yearfield").value;
	var dateofbirth = dateval+"/"+monthval+"/"+yearval;
	var dobhiddentb = document.getElementById("dobhiddenval");
	dobhiddentb.value = dateofbirth;
}
if(window.location.href.indexOf("contactme.php") != -1)
{
	window.onload = setcontactvalues
}