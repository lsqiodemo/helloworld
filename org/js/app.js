// declare a module
angular.module('AngularTestApp', ['ngRoute', 'ngAnimate'])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/weather/weather.html'
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
      .when('/weather', {
        templateUrl: 'js/weather/weather.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider
      .html5Mode(true);

  }]);

