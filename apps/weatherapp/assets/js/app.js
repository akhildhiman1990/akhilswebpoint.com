var app = angular.module('angularTestApp', ['ngRoute', 'oc.lazyLoad', 'mgcrea.ngStrap']);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	//route configuration
	$routeProvider.when('/home', {
		templateUrl : './templates/home/layout.html',
		controller : 'homeController',
		resolve : {
			loadCtrl : ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('./templates/home/controller.js');
			}]
		}
	}).otherwise({
		redirectTo : '/home'
	});
}]);

app.controller('AppController', ["$rootScope", "$scope", "$location", "$timeout",
function($rootScope, $scope, $location, $timeout) {

}]);

app.directive("makeFullScreenBg", ["$timeout", function($timeout){
	return {
		restrict : 'AE',
		link : function(scope, ielem, iattr) {
			function setHeight(){
				ielem.css("height", $(window).height());
			}
			
			$(window).resize(function(){
				setHeight();
			});
			
			$timeout(function(){
				setHeight();
			});
		}
	};
}]);
