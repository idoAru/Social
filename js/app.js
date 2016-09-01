var app = angular.module('myApp', ['ngRoute','appControllers','appDirective']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'partials/loginPage.html',
            controller  : 'loginController',

            //templateUrl : 'partials/mainThoughts.html',
            //controller  : 'mainThoughts'
        }).when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});