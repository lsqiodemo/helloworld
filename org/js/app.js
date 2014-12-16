// declare a module
angular.module('AngularTestApp', ['ngRoute'])

  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/weather/weather.html'
      })
      .when('/weather', {
        templateUrl: 'js/weather/weather.html'
      })
      .when('/clients', {
        templateUrl: 'js/clients/clients.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider
      .html5Mode(true);

  }]);

