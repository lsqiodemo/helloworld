angular.module("AngularTestApp")
  .controller('CollectionsController', function($scope, lsqService) {

    $scope.showLoader = false;
    $scope.collection = null;
    $scope.error = null;

    $scope.getCollection = function(name){
      $scope.showLoader = true;
      $scope.collection = null;
      $scope.error = null;

      lsqService.getCollection(name)
        .success(function(result){
          $scope.showLoader = false;
          $scope.resultName = name;
          $scope.collection = result.result;
        })
        .error(function(result){
          $scope.showLoader = false;
          $scope.error = result.error;
        });

    };

    $scope.removeItem = function(name, id){
      $scope.showLoader = true;
      $scope.collection = null;
      $scope.error = null;

      lsqService.deleteCollectionItem(name, id)
        .success(function(result){
          $scope.showLoader = false;
          $scope.resultName = name;
          $scope.collection = result.result;
        })
        .error(function(result){
          $scope.showLoader = false;
          $scope.error = result.error;
        });

    };

  });