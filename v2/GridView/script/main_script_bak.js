/**
 * @author Akhil
 */
$(document).ready(function(){
	var OuterHTML = "<div id='outerDiv'><div id='topLeft' class='innerDiv'><ul id='tabsName'><li class='activeLi' id='0000'>Add new Field</li><li id='0001'>Edit Field</li></ul><div id='tabbedDiv'><div id='addNew' class='tab0000 tabsDiv'></div><div id='EditField' class='tab0001 tabsDiv'></div></div></div><div id='topRight' class='innerDiv'></div></div>";
	$("body").html(OuterHTML);
	$(".tab0000").css("z-index","1111");
	$("#tabsName li").click(function(){
		$("#tabsName li").removeClass("activeLi");
		$(this).addClass("activeLi");
		var LiTabInd = $(this).attr('id');
		$(".tabsDiv").css("z-index","888");
		$(".tab"+LiTabInd).css("z-index","1111");
	});
	var topRightHTML = "<span class='emptyDiv'>No response fields</span>";
	$("#topRight").html(topRightHTML);
	var topLeftTextField = "<a href='' class='allTextFields'>TEXT</a>";
	$("#addNew").html(topLeftTextField);
	$(".allTextFields").draggable(
		{helper: "clone"}
	);
	$("#topRight").disableSelection();
	var FieldsHTML = "<div class='leftArgsDiv'><div id='arg1Div'><span>Argument 1 :</span><br><input type='text' class='argsTB' id='arg1Text'></div><div id='arg2Div'><span>Argument 2 :</span><br><input type='text' class='argsTB' id='arg2Text'></div></div>";
    $("#topRight").droppable({
      drop: function(event,ui) {
	  	var divIndex =  $('.CreatedDivs').length;
	  	var idTextBox = "TextBoxNo"+divIndex;
	  	var TextBox = "<div class='ui-state-highlight CreatedDivs'><label class='TextLabelHeading'>Untitled</label> <span class='requiredLabels'>*</span><br><input type='text' id='"+idTextBox+"' class='textBoxes' ><div class='generateDiv'><input type='button' id='button"+divIndex+"' class='GenerateAlert' value='Generate'></div></div>";
	  	$(".emptyDiv").remove();
	  	$("#topRight").append(TextBox);
		$("#0001").trigger("click");
		$(".leftArgsDiv").hide();
		$("#EditField").append(FieldsHTML);
		$(".CreatedDivs").click(function(){
			var index = $(this).index();
			$(".leftArgsDiv").hide();
			$(".leftArgsDiv:eq("+index+")").show();
		});
		id="input[id*=button"+divIndex+"]";
			$(id).click(function(){
			var buttonId = $(this).attr("id").replace("button","");
			var AnchorFieldText = $(".allTextFields").text();
			var CurrentDivIndex = $(this).parent().parent().index();
			var Argument1 = $(".leftArgsDiv:eq("+CurrentDivIndex+") #arg1Div #arg1Text").val();
			var Argument2 = $(".leftArgsDiv:eq("+CurrentDivIndex+") #arg2Div #arg2Text").val();
			var GenerateTextToAlert = "TextBoxNo"+buttonId+" = "+AnchorFieldText+" ( "+Argument1+", "+Argument2+")";
			alert(GenerateTextToAlert)
		});
      }
    });
});