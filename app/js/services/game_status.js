angular.module("app").factory("gameStatus", function (game, ships) {
  function shipsDeployed(ships) {
    var deployedShips = ships.filter(function(ship) {
      return ship.location === "deployed";
    });
    return deployedShips[0] !== undefined;
  }

  return {
    readyToPlay: function () {
      if ((game.status === "setup") && shipsDeployed(ships)) {
        return true;
      } else {
        return false;
      }
    }
  };
});
