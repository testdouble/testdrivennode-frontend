angular.module("app").controller("trackingGridCtrl", function ($scope, game, ShotsResource) {
  $scope.game = game;

  $scope.fire = function (cell) {
    if (game.turn !== "yours") {
      return;
    }

    if (cell.state !== "none") {
      return;
    }

    cell._fired = true;
    var shot = new ShotsResource({game_id: game.id});

    game.trackingGrid.forEach(function(row, y) {
      row.forEach(function(c, x) {
        if (c._fired) {
          shot.x = x;
          shot.y = y;
          shot.$save().then(function() {
            console.log(shot);
          })
        }
      });
    });

  };
});
