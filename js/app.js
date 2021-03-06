var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: 'js/login/login.html',
			controller: 'login-control'
		})
		.when('/threads', {})
		.when('/threads/:threadId', {})
		.otherwise({
			redirectTo: '/login'
		})
});