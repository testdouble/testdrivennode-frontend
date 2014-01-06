angular.module("app").filter("cellDisplay", function() {
  return function (state) {
    if (state === "none") {
      return "o";
    } else {
      return "x";
    }
  };
});
