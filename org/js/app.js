// declare a module
angular.module('AngularTestApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
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
  }]);

