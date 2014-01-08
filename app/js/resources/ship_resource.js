angular.module("app").factory("ShipsResource", function ($resource) {
  return $resource("/games/:gameId/ships", { gameId: "@gameId" });
});

