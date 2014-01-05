angular.module("app").controller("primaryGridCtrl", function($scope, primaryGrid, ships) {
  $scope.primaryGrid = primaryGrid;

  $scope.hasShip = function (cell) {
    if (cell.ship === "ship") {
      return "ship";
    } else {
      return "";
    }
  };

  $scope.place = function (cell) {
    var ship = _(ships).find(function(ship) {
      return ship.location === "transit";
    });

    if (ship === undefined) {
      return;
    }

    if (cell.ship === "ship") {
      return;
    }

    ship.placed++;

    if (ship.placed === ship.hull.length) {
      ship.location = "deployed";
    }
    cell.ship = "ship";
    return cell;
  };
});
