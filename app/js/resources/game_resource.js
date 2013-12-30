angular.module("app").factory("GameResource", function($resource) {
  return $resource('/games/:id');
});
