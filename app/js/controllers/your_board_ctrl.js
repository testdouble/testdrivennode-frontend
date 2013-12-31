angular.module("app").controller("yourBoardCtrl", function($scope, yourBoard, ships) {
  var lastCell = _(_(yourBoard).last().cells).last();
  $scope.yourBoard = yourBoard;

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

    if ((cell.row + length - 1) > lastCell.row) {
      return alert("not enough space");
    }

    ship.placed++;
    if (ship.placed === ship.hull.length) {
      ship.location = "deployed";
    }
    cell.ship = ship;
  };
});
