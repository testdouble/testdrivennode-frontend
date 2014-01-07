angular.module("app").factory("ships", function() {
 return [{
    name: "Destroyer",
    hull: ["o", "o", "o"],
    location: "docked",
    placed: 0
  }];
});
