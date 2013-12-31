angular.module("app").controller("shipsCtrl", function($scope, ships) {
  function dockedShips() {
    return _(ships).filter(function(ship) {
      return ship.location === "docked";
    });
  }

  $scope.prompt = function () {
    var transitShips = _(ships).filter(function(ship) {
      return ship.location === "transit";
    });

    if (transitShips[0]) {
      return "Place " + transitShips[0].name;
    } else if (dockedShips()[0]) {
      return "Select Ship";
    } else {
      return "Ready to play.";
    }
  };

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
