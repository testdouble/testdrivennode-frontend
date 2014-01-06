angular.module("app").filter("cellClass", function() {
  return function (cell) {
    if (cell.state === "hit") {
      return "hit";
    } else if (cell.ship) {
      return "ship";
    } else if (cell.state === "miss") {
      return "miss";
    } else {
      return "";
    }
  };
});
