'use strict';

angular
  .module('angularTestApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
	$routeProvider
	  .when('/', {
		templateUrl: 'views/main.html',
		controller: 'MainCtrl'
	  })
		.when('/alert',{
			templateUrl: 'views/alert.html',
			controller: 'AlertDemoCtrl'
		})
	  .otherwise({
		redirectTo: '/'
	  });
  });
