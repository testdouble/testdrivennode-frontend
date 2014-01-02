angular.module("app").factory("primaryGrid", function () {
  "use strict";
  var cells = _.range(3);

  function buildCell(row, column) {
    return {
      state: "none",
    };
  }

  function buildRow(row) {
    return cells.map(buildCell.bind(undefined, row));
  }

  return cells.map(buildRow);
});
