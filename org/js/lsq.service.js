'use strict';



angular.module('AngularTestApp')
  .factory('lsqService', function ($http) {

    var publicMethods = {};
    var config = {headers: { "Content-Type": "application/json" }};

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

      var query = {};

      return sendRequest(collectionName, "create", query, body);
    };

    publicMethods.updateCollectionItem = function(collectionName, id, body){

      var query = { "_id": id };

      return sendRequest(collectionName, "update", query, body);
    };

    publicMethods.deleteCollectionItem = function(collectionName, id){

      var query = { "_id": id };

      return sendRequest(collectionName, "delete", query);
    };

    return publicMethods;
  });


