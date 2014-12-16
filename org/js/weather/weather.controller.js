angular.module("AngularTestApp")
  .controller('WeatherController', function($scope, $http) {

    $scope.city = "Boise";
    $scope.state = "ID";

    $scope.getWeather = function(){

      $scope.showSpinner = true;
      $scope.weather = null;

      $http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + $scope.city + '%2C%20' + $scope.state + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
        .success(function(data){
          $scope.showSpinner = false;
          $scope.weather = data.query.results.channel;
        })
        .error(function(){
          $scope.showSpinner = false;
        });
    };

  });