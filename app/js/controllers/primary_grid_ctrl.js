angular.module("app").controller("primaryGridCtrl", function($scope, primaryGrid, ships) {
  $scope.primaryGrid = primaryGrid;

  $scope.hasShip = function (cell) {
    if (cell.ship === undefined) {
      return "";
    } else {
      return "ship";
    }
  };

  $scope.place = function (cell) {
    var ship = _(ships).find(function(ship) {
      return ship.location === "transit";
    });

    if (ship === undefined) {
      return;
    }

    if (cell.ship !== undefined) {
      return;
    }

    ship.placed++;
    if (ship.placed === ship.hull.length) {
      ship.location = "deployed";
    }
    cell.ship = ship;
  };
});
