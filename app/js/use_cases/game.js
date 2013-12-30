(function () {
  "use strict";

  function Game() {
    this.status = "setup";
    this.url =  "/games/:id";
  }

  Game.prototype.endSetup = function () {
    this.status = "inprogress";
    return this;
  };

  Game.prototype.toJSON = function () {
    return JSON.stringify({
      status: this.status,
      url: this.url,
    });
  };

  app.Game = Game;
})();
