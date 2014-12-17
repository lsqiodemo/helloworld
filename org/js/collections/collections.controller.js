angular.module("AngularTestApp")
  .controller('CollectionsController', function($scope, lsqService) {

    $scope.showLoader = false;
    $scope.collection = null;

    $scope.getCollection = function(name){
      $scope.showLoader = true;

      lsqService.getCollection(name)
        .then(function(result){
          $scope.showLoader = false;
          $scope.collection = result.data.result;
        });

    };

  });