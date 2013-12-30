window.app = {};

angular.module("app", ["ngResource", "ngRoute"]).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
    return this;
  };

  $rootScope.alert = function(thing) {
    alert(thing);
    return this;
  };
});
