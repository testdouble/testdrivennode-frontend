angular.module("app").controller("GameCtrl", function($scope, game, gameStatus) {
  $scope.game = game;
  $scope.gameStatus = gameStatus;
});
