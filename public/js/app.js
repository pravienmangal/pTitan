var appTitan = angular.module('appTitan', ['ngRoute']);

appTitan.config(function($routeProvider){
    $routeProvider
    
    .when('/step-one', {
        templateUrl: '../views/sc-step-one.html',
        controller: 'mainController'
    })
});