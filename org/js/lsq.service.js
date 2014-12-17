'use strict';



angular.module('AngularTestApp')
  .factory('lsqService', function ($http) {

    var publicMethods = {};


    var config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    var lsqObject_blank = {
      "token" : "IYFYstLbqGfJe8uyTDYn"
      ,"request": ""
      ,"query": {}
      ,"select":{}
      ,"show":true
    };

    var sendRequest = function(collectionName, requestObject){
      return $http.post('https://helloworld.lsq.io/api/v1/' + collectionName, requestObject, config)
    };


    publicMethods.getCollection = function(collectionName){

      //copy blank and set method
      var requestObject = angular.copy(lsqObject_blank);
      requestObject.request = "read";

      return sendRequest(collectionName, requestObject)
    };

    publicMethods.addCollectionItem = function(collectionName, body){

      //copy blank and set method
      var requestObject = angular.copy(lsqObject_blank);
      requestObject.request = "create";

      //set item body
      requestObject.model = body;


      return sendRequest(collectionName, requestObject);
      //return $http.post('https://helloworld.lsq.io/api/v1/' + collectionName, this.lsqObject, this.config)

    };


    publicMethods.deleteCollectionItem = function(collectionName, id){

      //copy blank and set method
      var requestObject = angular.copy(lsqObject_blank);
      requestObject.request = "delete";

      //set query
      requestObject.query = {
        "_id": id
      };

      return sendRequest(collectionName, requestObject);
      //return $http.post('https://helloworld.lsq.io/api/v1/' + collectionName, this.lsqObject, this.config)

    };

    return publicMethods;
  });


