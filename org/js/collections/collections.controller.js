angular.module("AngularTestApp")
  .controller('CollectionsController', function($scope, lsqService) {

    $scope.showLoader = false;
    $scope.collection = null;

    $scope.getCollection = function(name){
      $scope.showLoader = true;
      $scope.collection = null;

      lsqService.getCollection(name)
        .success(function(result){
          $scope.showLoader = false;
          $scope.collection = result.result;
        })
        .error(function(result){
          $scope.showLoader = false;
          $scope.error = result.error;
        });

    };

  });