angular.module("app").factory("game", function (GameResource, primaryGrid) {
  var gameResource = new GameResource();
  gameResource.$save().then(function(data) {
    gameResource.primaryGrid = primaryGrid;
  });
  return gameResource;
});
