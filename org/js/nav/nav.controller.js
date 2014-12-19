angular.module("AngularTestApp")
  .controller('NavController', function($scope, $location) {

    $scope.navLinks = [
      {name: "Clients", link: "#/clients"},
      {name: "Schemas", link: "#/schemas"},
      {name: "Events", link: "#/events"},
      {name: "Collections", link: "#/collections"}
    ];


    $scope.isActive = function (viewLocation) {
      return viewLocation === "/#" + $location.path();
    };

    $scope.login = function(){

    };

  });