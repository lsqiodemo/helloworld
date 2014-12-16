angular.module("AngularTestApp")
  .controller('EventsController', function($scope, lsqService) {

    $scope.showLoader = false;
    $scope.clients = null;

    $scope.getEvents = function(){
      $scope.showLoader = true;

      lsqService.getCollection('event')
        .then(function(result){
          $scope.showLoader = false;
          $scope.events = result.data.result;
        });

    };

  });