angular.module("app").controller("primaryGridCtrl", function($scope, game, ships, ShipsResource) {
  $scope.game = game;

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

    cell._placed = true;

    game.primaryGrid.forEach(function(row, x) {
      row.forEach(function(c, y) {
        if (c._placed) {
          new ShipsResource({
            gameId: game.id,
            x: x,
            y: y,
            orientation: "horizontal"
          }).$save().then(function(data) {
            console.log(data);
          });
        }
      });
    });
    ship.placed++;

    if (ship.placed === ship.hull.length) {
      ship.location = "deployed";
    }
    cell.ship = "ship";
    return cell;
  };
});
