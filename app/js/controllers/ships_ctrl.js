angular.module("app").controller("shipsCtrl", function($scope, ships, game) {

  $scope.ships = ships;
  $scope.handleShip = function(ship) {
    if (ship.location !== "docked") {
      return;
    }
    ship.location = "transit";
  };

  $scope.docked = function(ship) {
    if (ship.location === "docked") {
      return "ship";
    } else {
      return "";
    }
  };
});
