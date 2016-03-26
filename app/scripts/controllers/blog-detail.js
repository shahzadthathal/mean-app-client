'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BlogDetailCtrl
 * @description
 * # BlogDetailCtrl
 * Controller of the clientApp
 */
var BlogDetailCtrl =   clientApp.controller('BlogDetailCtrl', ['$scope', '$route', '$http', 'AppConfig', 'usSpinnerService', function ($scope, $route, $http, AppConfig, usSpinnerService) {

	usSpinnerService.spin('spinner-1');

	$scope.shopName = AppConfig.APP_NAME;
	$scope.blogDetail = {};
	$scope.blogs = [];
	$scope.blogcats = [];
	$scope.imageUrl = AppConfig.SERVERURL+'/images/';
  
	var bslug = $route.current.params.bslug;
	$http.get(AppConfig.SERVERURL + '/api/blog/detail/'+ bslug)
            .then(function(result){
                $scope.blogDetail = result.data;
     });


	$http.get(AppConfig.SERVERURL + '/api/blog/list')
      .then(function (result) {
        $scope.blogs =  result.data;
    });

    $http.get(AppConfig.SERVERURL + '/api/blog-category/list')
              .then(function(result){
                $scope.blogcats =  result.data;
    });

    usSpinnerService.stop('spinner-1');

}]); 