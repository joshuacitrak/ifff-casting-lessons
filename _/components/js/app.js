'user-strict';	
var app = angular.module('myApp', [ 'ngRoute', 'appControllers' ]).config(router);
	function router($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('!');
		$routeProvider.when('/puld', {
			templateUrl : 'partials/puld.html'
		}).when('/styleguide', {
			templateUrl : 'partials/styleguide.html'
		}).when('/shootingline', {
			templateUrl : 'partials/shootingline.html'
		}).when('/quickcast', {
			templateUrl : 'partials/quickcast.html'
		}).otherwise({
			redirectTo : '/puld'
		});
	}
    var appControllers = angular.module('appControllers', []);