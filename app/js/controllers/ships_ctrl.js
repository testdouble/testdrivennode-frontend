angular.module("app").controller("shipsCtrl", function($scope, ships) {
  $scope.tutorial = { instructions: "Select Ship" };
  $scope.ships = ships;
  $scope.handleShip = function(ship) {
    ship.location = "transit";
    $scope.tutorial.instructions = "Place " + ship.name;
    console.log(ship.name);
  };

  $scope.docked = function(ship) {
    if (ship.location === "docked") {
      return "ship";
    } else {
      return "";
    }
  };
});
