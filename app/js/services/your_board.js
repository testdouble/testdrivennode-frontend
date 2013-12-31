angular.module("app").factory("yourBoard", function () {
  var columns = "ABC".split("");
  var rows = _.range(3);
  function Cell(column, row) {
    this.display = "o";
    this.column = column;
    this.row = row;
  }

  function buildRow(column, row) {
    return {
      name: (row).toString(),
      cell: new Cell(column, row),
    };
  }

  function buildColumn(column) {
    return {
      name: column,
      rows: rows.map(buildRow.bind(undefined, column))
    };
  }
  return columns.map(buildColumn);
});
