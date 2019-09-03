angular.module('portfolioApp').controller('projectsController', ["$scope", "webServices",
function($scope, webServices) {

	webServices.fetchProjects().then(function(resp) {
		$scope.splitEvenOddRecords(resp.data);
	});

	//split even odd records
	$scope.splitEvenOddRecords = function(data) {
		$scope.allProjects = angular.copy(data.projects);
	};
}]).directive("detectDescriptionHeight", ["$timeout",
function($timeout) {
	return {
		restrict : "AE",
		scope : {
			detectDescriptionHeight : "="
		},
		link : function(scope, element) {
			function setWidth() {
				if (scope.detectDescriptionHeight % 2 != 0) {
					$timeout(function() {
						var height = Math.max(element.height(), element.parents(".project-wrapper").prev().find(".project-div").height());
						element.height(height);
						element.parents(".project-wrapper").prev().find(".project-div").height(height);
					});
				}
			}

			setWidth();

			$(window).resize(function() {
				setWidth();
			});
		}
	};
}]); 