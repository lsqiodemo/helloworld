'use strict';



angular.module('AngularTestApp')
  .service('lsqService', function ($http) {


    this.config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    this.lsqObject = {
      "token" : "IYFYstLbqGfJe8uyTDYn"
      ,"request": ""
      ,"query": {}
      ,"select":{}
      ,"show":true
    };

    this.getCollection = function(collectionName){

      this.lsqObject.request = "read";

      return $http.post('https://helloworld.lsq.io/api/v1/' + collectionName, this.lsqObject, this.config)

    };

    return this;
  });
