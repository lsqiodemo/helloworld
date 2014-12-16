angular.module("AngularTestApp")
  .controller('ClientsController', function($scope, $http) {

    $scope.showLoader = false;
    $scope.clients = null;

    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    var lsqObject = {
      "token" : "IYFYstLbqGfJe8uyTDYn"
      ,"request": "read"
      ,"query": {}
      ,"select":{}
      ,"show":true
    };

    $scope.getClients = function(){
      $scope.showLoader = true;
      $http.post('https://helloworld.lsq.io/api/v1/client', lsqObject, config)
        .then(function(result){
          $scope.showLoader = false;
          $scope.clients = result.data.result;
        });
    };

  });