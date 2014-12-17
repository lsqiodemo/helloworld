angular.module("AngularTestApp")
  .controller('CollectionsController', function($scope, lsqService) {

    $scope.showLoader = false;
    $scope.collection = null;

    $scope.getCollection = function(name){
      $scope.showLoader = true;

      lsqService.getCollection(name)
        .success(function(result){
          $scope.showLoader = false;
          $scope.collection = result.result;
        })
        .error(function(result){
          $scope.error = result.error;
        });

    };

  });