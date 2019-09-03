/**
 * @author akhil
 */
function resetstate()
{
	var x = document.getElementById("imagepanel");
	x.innerHTML = "";
}
function ipset()
{
	$.getJSON("http://jsonip.appspot.com?callback=?",
    function(data){
		var ip = data.ip;
		//document.getElementById("p1").innerHTML = "Your Current Location is :" +ip;
		document.getElementById("p1").innerHTML = "Your Current Location is : " +geoip_city();
  });
}	
function get_city()
{
	resetstate();
	var citytextbox = document.getElementById("citytextbox").value;
	var countrydropdown = document.getElementById("country").value;
	var statedropdown = document.getElementById("state").value;
 	$.ajax({
  	url : "http://api.wunderground.com/api/88010b2a033c4999/geolookup/conditions/q/"+statedropdown+"/"+citytextbox+".json",
  	dataType : "jsonp",
  	success : function(parsed_json) {
  	var location = parsed_json['location']['city'];
	var country_name = parsed_json['location']['country_name'];
  	var temp_c = parsed_json['current_observation']['temp_c'];
	var humidity = parsed_json['current_observation']['relative_humidity'];
	var wind = parsed_json['current_observation']['wind_kph'];
	var visible = parsed_json['current_observation']['visibility_km'];
	var weather = parsed_json['current_observation']['weather'];
	var date_time1 = parsed_json['current_observation']['local_time_rfc822'];
	var date_time2 = parsed_json['current_observation']['local_tz_short'];
	if(weather == "")
	{
		var img = document.createElement('IMG');
		img.src = "Pics/Sunny.png";
		document.getElementById("imagepanel").appendChild(img);
	}
	else if(weather != "" || weather != null)
	{
		var img = document.createElement('IMG');
		img.src = "Pics/"+weather+".png";
		document.getElementById("imagepanel").appendChild(img);
	}
	document.getElementById("city_panel").innerHTML = "<b>"+location+", "+country_name+"</b>"+"<br/>";
	document.getElementById("date_panel").innerHTML = "<b>"+date_time1 + " " + date_time2+"</b>" + "<br/>";
	document.getElementById("current_temp").innerHTML = "<b>"+"Current Temperature is : " +temp_c +"  'C"+"</b>"+"<br/>";
	document.getElementById("humidity_panel").innerHTML = "<b>"+"Humidity : "+humidity +"</b>"+"<br/>";
	document.getElementById("weather_cndn").innerHTML = "<b>"+"Weather Condition :" +weather+"</b>"+"<br/>";
	document.getElementById("wind_panel").innerHTML = "<b>"+"Wind SW at : " +wind+" kmph"+"</b>"+"<br/>";
	document.getElementById("visibility_panel").innerHTML = "<b>"+"Visibility upto " +visible+" km "+"</b>"+"<br/>";
  	}
  	});
}
