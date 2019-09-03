var app = angular.module('portfolioApp', ['ui.router', 'oc.lazyLoad', 'ngAnimate']);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	
	$urlRouterProvider.otherwise('/about');
	
	//state configuration
	$stateProvider.state('about', {
		url: '/about',
		templateUrl : '/templates/about/about-layout.html',
		controller : 'aboutController',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('/templates/about/controller.js');
			}]
		}
	}).state('project', {
		url: '/project',
		templateUrl : 'templates/project/project-layout.html',
		controller : 'projectsController',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('templates/project/controller.js');
			}]
		}
	}).state('blogs', {
		url: '/blogs',
		templateUrl : 'templates/blogs/blogs-layout.html',
		controller : 'blogsController',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('templates/blogs/controller.js');
			}]
		}
	}).state('resume', {
		url: '/resume',
		templateUrl : 'templates/resume/resume-layout.html',
		controller : 'resumeController',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('templates/resume/controller.js');
			}]
		}
	}).state('apps', {
		url: '/apps',
		templateUrl : 'templates/apps/apps-layout.html',
		controller : 'appsController',
		cache: false,
		resolve : {
			loadCtrl : ["$ocLazyLoad", function($ocLazyLoad) {
				return $ocLazyLoad.load('templates/apps/controller.js');
			}]
		}
	});
}]);

app.controller('AppController', ["$rootScope", "$scope", "webServices", "$location", "$timeout",
function($rootScope, $scope, webServices, $location, $timeout) {
	webServices.fetchTopHeader().then(function(resp) {
		$scope.topHeaderData = resp.data;
	});

	$scope.openResponsiveMenu = false;

	$scope.openUrlPage = function(url) {
		$location.path(url);
	};

	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
		$rootScope.animation = currRoute.animation;
	});

}]);

app.directive('responsiveMenu', ["$timeout",
function($timeout) {
	return {
		restrict : "AE",
		scope : {
			flag : "="
		},
		link : function(scope, element) {
			element.on("click", function(e) {
				$timeout(function() {
					scope.flag = true;
				});
			});
		}
	};
}]);

app.factory('$exceptionHandler', function () {
	return function (exception, cause) {
		console.log('exception : ', exception, " cause : ", cause);
	};
});

app.directive('closeResponsiveMenu', ["$location",
function($location) {
	return {
		restrict : "AE",
		scope : {
			flag : "=",
			locpath : "="
		},
		link : function(scope, element) {
			element.on("click", function(e) {
				hideResponsiveMenu();
			});

			function hideResponsiveMenu() {
				angular.element("#closeResponsiveMenu").trigger("click");
				$location.path(scope.locpath);
			}

		}
	};
}]);

app.directive('closeHoverMenu', ["$timeout",
function($timeout) {
	return {
		restrict : "AE",
		scope : {
			flag : "="
		},
		link : function(scope, element) {
			element.on("click", function(e) {
				hideResponsiveMenu();
			});

			$(window).on("resize", function() {
				hideResponsiveMenu();
			});

			function hideResponsiveMenu() {
				$timeout(function() {
					scope.flag = false;
				});
			}

		}
	};
}]);

app.factory('webServices', ["$http",
function($http) {
	//fetch top header
	this.fetchTopHeader = function() {
		var promise = $http.get("/json_services/v1/top_header.json");
		return promise;
	};

	//fetch about me
	this.fetchAboutMe = function() {
		var promise = $http.get("/json_services/v1/about_me.json");
		return promise;
	};

	//fetch resume
	this.fetchResume = function() {
		var promise = $http.get("/json_services/v1/resume.json");
		return promise;
	};

	//fetch projects
	this.fetchProjects = function() {
		var promise = $http.get("/json_services/v1/projects.json");
		return promise;
	};

	//fetch projects
	this.fetchBlogs = function() {
		var promise = $http.get("/json_services/v1/blogs.json");
		return promise;
	};
	
	this.fetchApps = function() {
		var promise = $http.get("/json_services/v1/apps.json");
		return promise;
	};

	return this;
}]);
