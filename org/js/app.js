// declare a module
angular.module('AngularTestApp', ['ngRoute', 'ngAnimate'])

  .config(['$routeProvider', '$locationProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/collections/collections.html'
      })
      .when('/collections', {
        templateUrl: 'js/collections/collections.html'
      })
      .when('/events', {
        templateUrl: 'js/events/events.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

