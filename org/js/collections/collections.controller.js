angular.module("AngularTestApp")
  .controller('CollectionsController', function($scope, lsqService) {

    $scope.showLoader = false;
    $scope.recordsFound = false;
    $scope.collection = null;
    $scope.error = null;

    $scope.testBody = {
      group: "Hello",
      body: {
        name: "Matt",
        age: 30,
        city: "Boise"
      }
    };

    $scope.getCollection = function(name){
      $scope.showLoader = true;
      $scope.error = null;
      $scope.collection = null;

      lsqService.getCollection(name)
        .success(function(result){
          $scope.showLoader = false;
          $scope.resultName = name;
          $scope.collection = result.result;
          $scope.recordsFound = $scope.collection.length > 0;
        })
        .error(function(result){
          $scope.showLoader = false;
          $scope.error = result.error;
        });

    };

    $scope.addItem = function(collectionName, body){
      $scope.showLoader = true;
      $scope.error = null;

      lsqService.addCollectionItem(collectionName, body)
        .success(function(result){
          $scope.showLoader = false;
          $scope.resultName = collectionName;

          //push in new item
          $scope.collection.push(result.result);
        })
        .error(function(result){
          $scope.showLoader = false;
          $scope.error = result.error;
        });

    };


    $scope.removeItem = function(collectionName, id){
      $scope.showLoader = true;
      $scope.error = null;

      lsqService.deleteCollectionItem(collectionName, id)
        .success(function(result){
          $scope.showLoader = false;
          $scope.resultName = collectionName;

          //splice out deleted item
          angular.forEach($scope.collection, function(item, index){
            if(item._id == result._id){
              $scope.collection.splice(index, 1);
            }
          });
        })
        .error(function(result){
          $scope.showLoader = false;
          $scope.error = result.error;
        });

    };

  });