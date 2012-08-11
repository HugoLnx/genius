describe("Integration", function() {
  it("player rise to stage level 2 until he miss", function() {
    var game = new HugoLnx.Genius.Game();
    var stage;
    var colors = [];

    stage = game.nextStage();
    expect(stage.level()).toBe(1);
    expect(stage.passed()).toBe(false);
    
    colors[0] = stage.nextColor()
    expect(stage.hit(colors[0])).toBe(true);
    expect(stage.failed()).toBe(false);
    expect(stage.passed()).toBe(true);


    stage = game.nextStage();
    expect(stage.level()).toBe(2);

    stage.nextColor();
    stage.nextColor();
    expect(stage.hit(null)).toBe(false);
    expect(stage.failed()).toBe(true);
  });

  it("player have to hit the colors in order to pass", function() {
    var game = new HugoLnx.Genius.Game();
    var stage;
    var colors = [];

    game.nextStage();
    stage = game.nextStage();
    colors.push(stage.nextColor());
    colors.push(stage.nextColor());

    expect(stage.hit(colors[0])).toBe(true);
    expect(stage.hit(colors[1])).toBe(true);
    expect(stage.passed()).toBe(true);
  });
});
