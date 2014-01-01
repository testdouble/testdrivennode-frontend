angular.module("app").controller("GameCtrl", function($scope, Game, GameResource) {
  pojo = { foo: "bar" };
  GameResource.save(Game.toJSON(), function(data) {
    Game.id = data.id;
  }).$promise.then(function(data) {
    console.log(Game);
  });
  var g = new GameResource();
  console.log(g);
  $scope.game = Game;
});
