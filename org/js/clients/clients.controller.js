angular.module("AngularTestApp")
  .controller('ClientsController', function($scope, $http) {

    $scope.showLoader = false;
    $scope.clients = null;

    var lsqObject = {
      "token" : "123456"
      ,"request" : "read"
      ,"query": {}
    };

    $scope.getClients = function(){
      $scope.showLoader = true;
      $http.post('https://helloworld.lsq.io/api/v1/client', lsqObject)
        .then(function(result){
          $scope.showLoader = false;
          $scope.clients = result.data;
        });
    };

  });