angular.module("AngularTestApp")
  .controller('NavController', function($scope, $location) {

    $scope.navLinks = [
      {name: "Collections", link: "#/collections"},
      {name: "Events", link: "#/events"}
    ];


    $scope.isActive = function (viewLocation) {
      return viewLocation === "/#" + $location.path();
    };

    $scope.login = function(){

    };

  });