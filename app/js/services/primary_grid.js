angular.module("app").factory("primaryGrid", function () {
  "use strict";
  var columns = "ABC".split("");
  var rows = _.range(1, 4);

  function buildCell(row, column) {
    return {
      state: "none",
    };
  }

  function buildRow(row) {
    return {
      name: row,
      cells: columns.map(buildCell.bind(undefined, row))
    };
  }

  return rows.map(buildRow);
});
