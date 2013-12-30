angular.module("app").controller("GameCtrl", function($scope, Game, GameResource) {
  pojo = { foo: "bar" };
  GameResource.save(pojo, function(data) {
    pojo.id = data.id;
    console.log(pojo);
  }).$promise.then(function(data) {
    console.log(data);
  });
  $scope.status = Game.status;
});
