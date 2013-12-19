angular.module("app").controller("GameCtrl", function($scope, Game) {
  $scope.status = Game.status;
});
