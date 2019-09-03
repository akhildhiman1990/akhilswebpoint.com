/**
 * @author Akhil
 */
 //Reached Me At Start
  $.ajax({
         type: 'GET',
         url: 'jsonfiles/reachmeat.json',
         dataType: 'json',
         success: function(items){
		 var itemsarr = JSON.stringify(items);
		 var itemarrayobj = JSON.parse(itemsarr);
		 for (var i = 0; i < itemarrayobj.length; i++) {
			 var ulreach = document.getElementById("reachmeul");
			 var lireach = document.createElement("li");
			 ulreach.appendChild(lireach);
			 lireach.innerHTML = itemarrayobj[i].heading;
			 lireach.setAttribute("id",itemarrayobj[i].id);
			 lireach.setAttribute("onclick",itemarrayobj[i].onclick);
		 }
         },
         error: function(items){
         alert("Error!!!!!")
         }
});
 //Reached Me At End
 
 //Worked At Start
 $.ajax({
         type: 'GET',
         url: 'jsonfiles/sidebar_companies.json',
         dataType: 'json',
         success: function(items){
		 var itemsarr = JSON.stringify(items);
		 var itemarrayobj = JSON.parse(itemsarr);
		 for (var i = 0; i < itemarrayobj.length; i++) {
			 var ulwork = document.getElementById("workedat");
			 var liwork = document.createElement("li");
			 ulwork.appendChild(liwork);
			 liwork.innerHTML = itemarrayobj[i].heading;
			 liwork.setAttribute("id",itemarrayobj[i].id);
			 liwork.setAttribute("onclick",itemarrayobj[i].onclick);
			 liwork.setAttribute("style",itemarrayobj[i].style);
		 }
         },
         error: function(items){
         alert("Error!!!!!")
         }
});
//Worked At End