angular.module("app").controller("ShipsCtrl", function($scope) {
  $scope.tutorial = { instructions: "Select Ship" };
  $scope.ships = [{
    name: "Patrol Boat",
    hull: ["o", "o"],
  }];
});
