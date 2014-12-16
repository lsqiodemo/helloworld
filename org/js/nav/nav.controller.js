angular.module("AngularTestApp")
  .controller('NavController', function($scope) {

    $scope.navLinks = [
      {name: "Clients", link: "clients"},
      {name: "Schemas", link: "schemas"},
      {name: "Events", link: "events"},
    ];

    $scope.active = function(){

    };

    $scope.login = function(){

    };

  });