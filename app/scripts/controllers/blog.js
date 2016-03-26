'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the clientApp
 */

  
var BlogCtrl =   clientApp.controller('BlogCtrl', ['$scope', '$route', '$http', 'AppConfig', 'usSpinnerService', function ($scope, $route, $http, AppConfig, usSpinnerService) {

    usSpinnerService.spin('spinner-1');
    
    $scope.shopName = AppConfig.APP_NAME;
    $scope.blogs = [];
    $scope.blogcats = [];
	$scope.products = [];
    $scope.imageUrl = AppConfig.SERVERURL+'/images/';
    
    $http.get(AppConfig.SERVERURL + '/api/blog/list')
      .then(function (result) {
        $scope.blogs =  result.data;
    });
      
    $http.get(AppConfig.SERVERURL + '/api/blog-category/list')
              .then(function(result){
                $scope.blogcats =  result.data;
    });

    $http.get(AppConfig.SERVERURL + '/api/product/list')
      .then(function (result) {
        $scope.products =  result.data;
    });
         
    usSpinnerService.stop('spinner-1');

}]);
