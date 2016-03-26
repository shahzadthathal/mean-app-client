'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
var clientApp = angular.module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'angularSpinner',
    'angular-loading-bar'
  ]);
  clientApp.constant('AppConfig', {
    'APP_NAME' : 'Web Shop',
    'APP_VERSION' : '1.0.0',
    'SERVERURL': 'http://localhost:3003',
    'GOOGLE_ANALYTICS_ID' : '',
    'BASE_URL' : '',
    'META_TITLE': 'Web Shop'
   });
  clientApp.config(function ($routeProvider, $locationProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product-detail/:pslug', {
        templateUrl:  'views/product-detail.html',
        controller:   'ProductDetailCtrl'
      })
      .when('/product-category/:cslug', {
        templateUrl: 'views/product-category.html',
        controller: 'ProductCategoryCtrl'        
      })
      .when('/tag/:tslug', {
        templateUrl: 'views/tag.html',
        controller: 'TagCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/blog-detail/:bslug', {
        templateUrl: 'views/blog-detail.html',
        controller: 'BlogDetailCtrl'
      })
      .when('/blog-category/:bcslug', {
        templateUrl: 'views/blog-category.html',
        controller: 'BlogCategoryCtrl'
      })
      .when('/payment-methods', {
        templateUrl: 'views/payment-methods.html',
        controller: 'PaymentMethodCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    //$locationProvider.html5Mode(true);  
     
  });

  clientApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])