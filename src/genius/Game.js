(function(Genius) {
  var Stage = Genius.Stage;

  Genius.Game = function() {
    var _actualLevel = 0;

    this.nextStage = function() {
      return new Stage(++_actualLevel);
    }
  }
}(HugoLnx.Genius));
