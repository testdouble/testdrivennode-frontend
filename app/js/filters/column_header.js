angular.module("app").filter("columnHeader", function() {
  return function(index) {
    var header = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")[index];
    if (header === undefined) {
      throw "index not found";
    } else {
      return header;
    }
  };
});
