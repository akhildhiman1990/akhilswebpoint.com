angular.module('portfolioApp').controller('appsController', ["$rootScope", "$scope", "webServices",
function($rootScope, $scope, webServices) {
	webServices.fetchApps().then(function(resp) {
		$scope.appsData = resp.data;
	});

	//open blog in other tab
	$scope.openAppsInOtherTab = function(link) {
		window.open(link, "_blank");
	};

}]); 