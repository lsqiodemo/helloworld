angular.module("AngularTestApp")
  .controller('ClientsController', function($scope, lsqService) {

    $scope.showLoader = false;
    $scope.clients = null;

    $scope.getClients = function(){
      $scope.showLoader = true;

      lsqService.getCollection('client')
        .then(function(result){
          $scope.showLoader = false;
          $scope.clients = result.data.result;
        });

    };

  });