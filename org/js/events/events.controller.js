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

    $scope.addItem = function(collectionName, body){
      $scope.showLoader = true;
      $scope.error = null;

      var runDate = new Date(body.Run_Date + " " + body.Run_Time);

      var event = {
        route: body.route,
        date: runDate,
        body: body.body
      };

      lsqService.addCollectionItem(collectionName, event)
        .success(function(response){
          $scope.showLoader = false;
          $scope.resultName = collectionName;

          //push in new item
          $scope.events.push(response.result);
        })
        .error(function(response){
          $scope.showLoader = false;
          $scope.error = response.error;
        });

    };

    $scope.removeItem = function(collectionName, id){
      $scope.showLoader = true;
      $scope.error = null;

      lsqService.deleteCollectionItem(collectionName, id)
        .success(function(response){
          $scope.showLoader = false;
          $scope.resultName = collectionName;

          //splice out deleted item
          angular.forEach($scope.events, function(item, index){
            if(item._id == response.result._id){
              $scope.events.splice(index, 1);
            }
          });
        })
        .error(function(response){
          $scope.showLoader = false;
          $scope.error = response.error;
        });

    };



    //Init
    $scope.getEvents();
  });