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
    $scope.shopName = AppConfig.APP_NAME;

    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set($scope.shopName+"|Products","Product description","products,webshop");


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
