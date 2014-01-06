angular.module("app").factory("ShotsResource", function ($resource) {
  return $resource("/games/:game_id/shots", { game_id: "@game_id" });
});
