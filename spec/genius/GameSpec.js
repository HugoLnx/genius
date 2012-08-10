describe("Game", function() {
  var Game = HugoLnx.Genius.Game;

  it("increment stage level", function() {
    var game = new Game();
    expect(game.nextStage().level()).toBe(1);
    expect(game.nextStage().level()).toBe(2);
    expect(game.nextStage().level()).toBe(3);
  });
});
