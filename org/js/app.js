// declare a module
var myAppModule = angular.module('myApp', []);

// configure the module.
// in this example we will create a greeting filter
myAppModule
  .controller('MainController', function($scope, $http) {
    $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
      .then(function(result){

        $scope.weather = result.data.query.results.channel;
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