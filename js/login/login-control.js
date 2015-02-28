var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, EnvironmentService){
	$scope.env = EnvironmentService.$window.env;
});