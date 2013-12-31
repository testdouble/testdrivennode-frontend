angular.module("app").controller("GameCtrl", function($scope, Game, GameResource) {
  pojo = { foo: "bar" };
  GameResource.save(pojo, function(data) {
    pojo.id = data.id;
  }).$promise.then(function(data) {
  });
  $scope.status = Game.status;
});
