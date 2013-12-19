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

  it("has a nickname input field.", function () {
    var nicknameField = $('#nickname-field');
    var name = "Bob";
    nicknameField.sendKeys(name).
      then(function (sentKeys) {
      expect($('nickname').getText()).toBe(name);
    })
  });
});
