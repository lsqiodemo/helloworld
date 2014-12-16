// declare a module
var myAppModule = angular.module('myApp', []);

// configure the module.
// in this example we will create a greeting filter
myAppModule.controller('MainController', function($scope, $http) {

  $http.get('http://api.openweathermap.org/data/2.5/weather?lat=46.5&lon=-116&units=imperial')
    .then(function(result){

      $scope.weather = result.data;
    });


});