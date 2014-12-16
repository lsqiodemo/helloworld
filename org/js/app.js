// declare a module
angular.module('AngularTestApp', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/weather/weather.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

