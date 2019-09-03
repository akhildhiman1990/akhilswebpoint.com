angular.module('angularTestApp', ['angular-flexslider']).controller('homeController', ["$scope", "weatherServices", function ($scope, weatherServices) {  
    $scope.fetchCity = function(__textToSearch){  
    	if(__textToSearch){
    		return weatherServices.fetchCity(__textToSearch).then(function(__res){
    			return __res.data.RESULTS;
    		});
    	}
    };
    
    $scope.init = function(){
    	$scope.searchCity = {
			"name": "Jullundur, India", 
			"type": "city", 
			"c": "IN",
			"zmw": "00000.35.42075",
			"tz": "Asia/Kolkata",
			"tzs": "IST",
			"l": "/q/zmw:00000.35.42075",
			"ll": "31.320000 75.580002",
			"lat": "31.320000",
			"lon": "75.580002"
		};
		
		$scope.fetchData($scope.searchCity);
    };
    
    $scope.fetchData = function(__data){
    	$scope.flagsServices = {
    		"forecast": {
    			"flag": true,
    			"text": "Please Wait..."
    		},
    		"hourly": {
    			"flag": true,
    			"text": "Please Wait..."
    		},
    		"trips": {
    			"flag": true,
    			"text": "Please Wait..."
    		}
    	};
    	
    	$scope.resetAllData();
    	$scope.fetchConditions(__data);
    	$scope.fetchHourlyWeather(__data);
    	$scope.fetchTripPlanner(__data);
    };
    
    $scope.fetchConditions = function(__data){
    	weatherServices.fetchSelWeather(__data.c == 'US' ? __data.name.split(", ")[1] : __data.c, __data.name.split(",")[0]).then(function(__res){
    		$scope.forecastSelCity = __res.data;
    	}, function(__error){
    		$scope.flagsServices.forecast.flag = false;
    		$scope.flagsServices.forecast.text = "Something went wrong. Please try again later.";
    	});
    };
    
    $scope.fetchHourlyWeather = function(__data){
    	weatherServices.fetchHourlyWeather(__data.c == 'US' ? __data.name.split(", ")[1] : __data.c, __data.name.split(",")[0]).then(function(__res){
    		$scope.hourlyForecast = __res.data;
    	}, function(__error){
    		$scope.flagsServices.hourly.flag = false;
    		$scope.flagsServices.hourly.text = "Something went wrong. Please try again later.";
    	});
    };
    
    $scope.getMonthDateRange = function(year, month) {
	    var startDate = moment([year, month]).add(0,"month");
	    var endDate = moment(startDate).endOf('month');
	    
	    return {start: startDate, end: endDate};
	};
    
    $scope.fetchTripPlanner = function(__data){
    	var date = new Date();
    	var monthDetails = $scope.getMonthDateRange(date.getFullYear(), date.getMonth());
    	var queryMonth = moment(monthDetails.start).format("MMDD")+moment(monthDetails.end).format("MMDD");
    	
    	weatherServices.fetchTripPlanner(__data.c == 'US' ? __data.name.split(", ")[1] : __data.c, __data.name.split(",")[0], queryMonth).then(function(__res){
    		$scope.tripPlanner = __res.data;
    	}, function(__error){
    		$scope.flagsServices.trips.flag = false;
    		$scope.flagsServices.trips.text = "Something went wrong. Please try again later.";
    	});
    };
    
    $scope.resetAllData = function(){
    	$scope.hourlyForecast = {};
		$scope.forecastSelCity = {};
    	$scope.tripPlanner = {};
    };
    
    $scope.$on("fetch-weather.select", function(evt, data){
    	if(data.type == "city"){
    		$scope.fetchData(data);
    	}
    });
    
}]).factory("weatherServices", ["$http", function($http){
	var services = {};
	services.apiKey = "e70f100e9d1d4c69";
	
	services.fetchCity = function(__textToSearch){
		return $http.jsonp("http://autocomplete.wunderground.com/aq?query="+__textToSearch+"&cb=JSON_CALLBACK");
	};
	
	services.fetchSelWeather = function(__stateOrCountry, __city){
		var promise = $http.get("http://api.wunderground.com/api/"+services.apiKey+"/conditions/q/"+__stateOrCountry+"/"+__city+".json");
		
		return promise;
	};
	
	services.fetchHourlyWeather = function(__stateOrCountry, __city){
		var promise = $http.get("http://api.wunderground.com/api/"+services.apiKey+"/hourly/q/"+__stateOrCountry+"/"+__city+".json");
		
		return promise;
	};
	
	services.fetchTripPlanner = function(__stateOrCountry, __city, __queryMonth){
		var promise = $http.get("http://api.wunderground.com/api/"+services.apiKey+"/planner_"+__queryMonth+"/q/"+__stateOrCountry+"/"+__city+".json");
		
		return promise;
	};
	
	return services;
}]);