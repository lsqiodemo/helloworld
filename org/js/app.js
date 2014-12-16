// declare a module
var myAppModule = angular.module('myApp', []);

// configure the module.
// in this example we will create a greeting filter
myAppModule
  .controller('MainController', function($scope, $http) {
    $http.get('https://api.openweathermap.org/data/2.5/weather?lat=46.5&lon=-116&units=imperial')
      .then(function(result){

        $scope.weather = result.data;
      });
  })

  .filter('windDirection', function() {
    return function(input) {
      if (input < 11.25){return "N"}
      if (input < 56.25){return "NE"}
      if (input < 101.25){return "E"}
      if (input < 146.25){return "SE"}
      if (input < 191.25){return "S"}
      if (input < 236.75){return "SW"}
      if (input < 281.75){return "W"}
      if (input < 348.75){return "NW"}
      return "N"
    };
  })
;