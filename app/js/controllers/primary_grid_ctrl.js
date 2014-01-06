angular.module("app").controller("primaryGridCtrl", function($scope, primaryGrid, ships) {
  $scope.primaryGrid = primaryGrid;

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
