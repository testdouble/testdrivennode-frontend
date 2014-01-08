angular.module("app").factory("game", function (GameResource) {
  var gameResource = new GameResource();
  gameResource.$save();
  return gameResource;
});
