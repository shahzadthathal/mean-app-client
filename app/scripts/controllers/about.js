

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */

 
 var AboutCtrl =   clientApp.controller('AboutCtrl', ['$scope', '$sce', '$route', '$http', 'AppConfig', 'usSpinnerService', function ($scope, $sce, $route, $http, AppConfig, usSpinnerService) {
    
    usSpinnerService.spin('spinner-1');
    $scope.shopName = AppConfig.APP_NAME;
    $scope.pageData = {};

     $http.get(AppConfig.SERVERURL + '/api/page/detail/about-us')
      .then(function (result) {
        $scope.pageData =  result.data;
        //return $scope.pageData;
    })
    .catch(function(e){
	  	console.log(e);
	  	usSpinnerService.stop('spinner-1');
	});

		$scope.renderHtml = function(html_code)
		{
		    return $sce.trustAsHtml(html_code);
		};

      
    usSpinnerService.stop('spinner-1');

  }]);
