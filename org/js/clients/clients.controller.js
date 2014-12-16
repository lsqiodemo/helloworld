angular.module("AngularTestApp")
  .controller('ClientsController', function($scope, $http) {

    $scope.showLoader = false;
    $scope.clients = null;

    $scope.getClients = function(){
      $scope.showLoader = true;
      $http.get('')
        .then(function(result){
          $scope.showLoader = false;
          $scope.clients = result.data;
        });
    };

  });