angular.module('portfolioApp').controller('resumeController', ["$rootScope", "$scope", "webServices",
function($rootScope, $scope, webServices) {
	webServices.fetchResume().then(function(resp) {
		$scope.resumeData = resp.data;
	});
}]).directive('sliderTechnology', ['$timeout', '$rootScope',
function($timeout, $rootScope) {
	return {
		restrict : 'E',
		scope : {
			name : "=",
			percentage : "="
		},
		templateUrl : "templates/custom/slider.html",
		link : function(scope, element, attrs) {
			function slider(sliderData) {
				$timeout(function() {
					element.find(".slider-div").animate({
						"width" : sliderData + "%"
					}, 1500);
				});
			}


			element.find(".slider-div").css("width", "0px");
			slider(scope.percentage);
		}
	};
}]); 