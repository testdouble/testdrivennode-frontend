angular.module("app").factory("gameStatus", function (game, ships) {
  function shipsDeployed(ships) {
    var deployedShips = ships.filter(function(ship) {
      return ship.location === "deployed";
    });
    return deployedShips[0] !== undefined;
  }

  function setupPrompt() {
    var transitShips = ships.filter(function(ship) {
      return ship.location === "transit";
    });

    var dockedShips = ships.filter(function(ship) {
      return ship.location === "docked";
    });

    if (transitShips[0]) {
      return "Place " + transitShips[0].name;
    } else if (dockedShips[0]) {
      return "Select Ship";
    } else {
      return "Ready to play.";
    }
  }

  function inprogressPrompt() {
    if (game.turn === "yours") {
      return "Fire when ready.";
    } else {
      return "Waiting for opponent."
    }
  }

  return {
    isReady: function () {
      return (game.status === "setup" && shipsDeployed(ships));
    },

    start: function() {
      game.$update();
    },

    prompt: function() {
      if (game.status === "setup") {
        return setupPrompt();
      } else if (game.status === "inprogress") {
        return inprogressPrompt();
      }
    }
  };
});
