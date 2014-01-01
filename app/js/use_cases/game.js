(function () {
  "use strict";

  function Game() {
    this.yourStatus = "setup";
    this.opponentStatus = "waiting for server";
    this.foo = "bar";
  }

  Game.prototype.endSetup = function () {
    this.yourStatus = "inprogress";
    return this;
  };

  Game.prototype.toJSON = function () {
    return JSON.stringify({
      yourStatus: this.yourStatus,
      opponentStatus: this.opponentStatus,
    });
  };

  app.Game = Game;
})();
