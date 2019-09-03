<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Weather App</title>
		<link rel="stylesheet" href="stylesheet\jquery.mobile-1.3.0.css">
		<link rel="stylesheet" href="stylesheet\myedits.css">
		<script type="text/javascript" src="script\jquery.js"></script>
		<script type="text/javascript" src="http://j.maxmind.com/app/geoip.js"></script>
		<script type="text/javascript" src="script\jquery.mobile-1.3.0.js"></script>
		<script type="text/javascript" src="script\main_script.js"></script>
		<script type="text/javascript" src="script\countries.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
	</head>
	<body onload="ipset()">
    	 	<!--App start here-->
		<div data-role="page" id="page1">
		<!--header-->
		<div data-role="header" data-position="fixed" data-theme="b" data-id="header1">
			<h1>Weather App</h1>
		</div>
		<!--content-->
		<div data-role="content" id="main_div" align="center">
			<div data-role="content" id="report_div" data-theme="b" align="left">
				<panel id="imagepanel"></panel>
				<panel id="city_panel"></panel>
				<panel id="date_panel"></panel>
				<panel id="current_temp"></panel>
				<panel id="humidity_panel"></panel>
				<panel id="weather_cndn"></panel>
				<panel id="wind_panel"></panel>
				<panel id="visibility_panel"></panel>
            </div><br>
		<div data-role="content" id="selectioncity" data-theme="b">
			<div data-role="fieldcontain">
				<label for="country"><b>Select Country: </b></label>   
				<select onchange="print_state('state',this.selectedIndex);" id="country" name ="country"></select>
			 <br><br>
			 <label for="state"><b>Select State: </b></label>
			 <select name ="state" id ="state"></select><br>
			 <script language="javascript">print_country("country");</script>
            	<br><div id="city">
					<label for="city"><b>Enter City:  </b></label>
					<input type="text" id="citytextbox" data-theme="b">
					<input type="button" id="fetch_weather" data-theme="b" data-inline="true" value="Fetch Weather" onclick="get_city()">
				</div>
				
			</div>
		</div>
		</div><br>
		<!--footer-->
		<div data-role="footer" data-position="fixed" data-theme="b" data-id="footer1">
			<div id="current_loc">
				<p id="p1"></p>
			</div>
		</div>
		</div>
		<!--App ends here -->
	</body>
</html>
