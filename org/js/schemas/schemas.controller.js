angular.module("AngularTestApp")
  .controller('SchemasController', function($scope, $http, lsqService) {

    $scope.showLoader = false;
    $scope.schemas = null;

    $scope.getSchemas = function(){
      $scope.showLoader = true;

      lsqService.getCollection('schema')
        .then(function(result){
          $scope.showLoader = false;
          $scope.schemas = result.data.result;
        });
    };

  });