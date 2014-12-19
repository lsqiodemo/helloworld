'use strict';



angular.module('AngularTestApp')
  .factory('lsqService', function ($http) {

    var publicMethods = {};

    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    var sendRequest = function(collectionName, requestType, query, model, select){

      var requestObject = {
        "token" : "IYFYstLbqGfJe8uyTDYn"
        ,"request": requestType
        ,"query": query
        ,"model": model
        ,"select": select
        ,"show":true
      };

      return $http.post('/api/v1/' + collectionName, requestObject, config)
    };


    publicMethods.getCollection = function(collectionName){

      return sendRequest(collectionName, "read")
    };

    publicMethods.addCollectionItem = function(collectionName, body){

      return sendRequest(collectionName, "create", {}, body);
    };

    publicMethods.deleteCollectionItem = function(collectionName, id){

      return sendRequest(collectionName, "delete", { "_id": id });
    };

    return publicMethods;
  });


