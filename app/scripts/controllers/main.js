'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */

  
var MainCtrl =   clientApp.controller('MainCtrl', ['$scope', '$http', 'AppConfig', 'usSpinnerService', '$rootScope', 'MetaService', function ($scope, $http, AppConfig, usSpinnerService, $rootScope, MetaService) {

    usSpinnerService.spin('spinner-1');

    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("Test 1223","desc 123","blah blah");

    
    $scope.shopName = AppConfig.APP_NAME;
    $scope.products = [];
    $scope.productcats = [];    
    $scope.imageUrl = AppConfig.SERVERURL+'/images/';


    $http.get(AppConfig.SERVERURL + '/api/product/list')
      .then(function (result) {
        $scope.products =  result.data;
    });
      
    $http.get(AppConfig.SERVERURL + '/api/product-category/list')
              .then(function(result){
                $scope.productcats =  result.data;
    });
         
    usSpinnerService.stop('spinner-1');

}]);
