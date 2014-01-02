angular.module("app").filter("cellDisplay", function() {
  return function (state) {
    if (state === "none") {
      return "o";
    } else {
      throw "unknown cell state";
    }
  };
});
