angular.module("app").controller("yourBoardCtrl", function($scope, yourBoard) {
  $scope.yourBoard = yourBoard;
  console.log(yourBoard);
});
