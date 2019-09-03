angular.module('portfolioApp', ['angular-flexslider']).controller('aboutController', ["$scope", "webServices", function ($scope, webServices) {
    
    //fetch about me data
    webServices.fetchAboutMe().then(function(resp){
        $scope.aboutMeInfo = resp.data;   
    });
    
    //flexslider data
    $scope.flexsliderItems = [
        {id:1, img:'assets/images/image1.JPG'},
        {id:2, img:'assets/images/image2.jpg'},
        {id:3, img:'assets/images/image3.jpg'},
        {id:4, img:'assets/images/image4.JPG'},
    ];

    //download resume
    $scope.downloadResume = function(){
        window.open("assets/docs/akhildhiman.pdf", "_blank");
    };
}]);