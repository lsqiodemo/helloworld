// declare a module
angular.module('AngularTestApp', ['ngRoute', 'ngAnimate'])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/clients/clients.html'
      })
      .when('/clients', {
        templateUrl: 'js/clients/clients.html'
      })
      .when('/schemas', {
        templateUrl: 'js/schemas/schemas.html'
      })
      .when('/events', {
        templateUrl: 'js/events/events.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider
      .html5Mode(true);

  }]);

