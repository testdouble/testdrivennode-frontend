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

  describe("setup phase", function () {

    xit("lets us know we're in setup.", function () {
      var phase = $('phase');
      phase.getText().
        then(function (textFromPhase) {
        expect(textFromPhase).toBe("Setup");
      });
    });

    xit("lets us place ships during setup.", function () {
      var cruiser = $('cruiser');
      var a1 = $('A1');
      cruiser.click().
        then(function () {
        a1.click();
      }).then(function () {
        expect((a1).getText()).toBe('Cr');
      });
    });
  });
});
