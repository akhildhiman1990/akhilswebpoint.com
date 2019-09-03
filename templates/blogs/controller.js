angular.module('portfolioApp').controller('blogsController', ["$rootScope", "$scope", "webServices",
function($rootScope, $scope, webServices) {
	webServices.fetchBlogs().then(function(resp) {
		$scope.blogsData = resp.data;
	});

	//open blog in other tab
	$scope.openBlogInOtherTab = function(link) {
		window.open(link, "_blank");
	};

}]); 