var protractor = require("protractor");
var ptor = protractor.getInstance();

describe("Battleship page", function () {
  beforeEach(function () {
    ptor.get('/');
  });

  it("has a header", function () {
    $('h1').getText().
      then(function (textFromHeader) {
      expect(textFromHeader).toBe("Battleship");
    });
  });
});
