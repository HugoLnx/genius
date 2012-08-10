describe("Stage", function() {
  var Stage = HugoLnx.Genius.Stage;
  var Color = HugoLnx.Genius.Color;

  describe("#level()", function() {
    it("returns your own level", function() {
      var stage = new Stage(1);
      expect(stage.level()).toBe(1);
    });
  });

  describe("#nextColor()", function() {
    it("returns an Color", function() {
      var stage = new Stage(1);
      var color = stage.nextColor();
      expect(color).toBeKindOf(Color);
    });
  });

  describe("#hit(color)", function() {
    it("return true if color is the last color", function() {
      var stage = new Stage(1);
      var color = stage.nextColor();
      expect(stage.hit(color)).toBe(true);
    });

    it("return false if color isnt the last color", function() {
      var stage = new Stage(1);
      var color = stage.nextColor();
      expect(stage.hit(null)).toBe(false);
    });
  });

  describe("#passed()", function() {
    it("return true if all colors of stage was hitted", function() {
      var stage = new Stage(1);
      var color = stage.nextColor();
      stage.hit(color);
      expect(stage.passed()).toBe(true);
    });

    it("return false unless all colors of stage was hitted", function() {
      var stage = new Stage(1);
      expect(stage.passed()).toBe(false);
    });
  });

  describe("#failed()", function() {
    it("return false if no hit was missing", function() {
      var stage = new Stage(1);
      expect(stage.failed()).toBe(false);
    });

    it("return true if one hit was missing", function() {
      var stage = new Stage(1);
      stage.hit(null);
      expect(stage.failed()).toBe(true);
    });
  });
});
