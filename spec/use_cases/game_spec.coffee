describe "game", ->
  Given -> @game = new app.Game

  describe "fresh game", ->
    Then -> expect(@game.status).toBe("setup")

  describe "#toJSON", ->
    Then -> expect(@game.toJSON()).toMatch(/setup/)

  describe "when setup ends", ->
    Given -> @game.endSetup()
    Then "let the server know", ->
    Then -> expect(@game.status).toBe("inprogress")
    Then "let the server know", ->

  describe "it's our turn after we're shot at", ->
