(function(Genius) {
  var Color = Genius.Color;
  var HappyArray = Genius.HappyArray;

  Genius.Stage = function (level) {
    var _level = level;
    var _failed = false;
    var _colors = new HappyArray();
    var _allShown = false;

    this.nextColor = function() {
      var color = Color.random();
      _colors.push(color);

      if(_colors.length === _level) {
        _allShown = true;
      }

      return color;
    };

    this.hit = function(color) {
      var hitted = color === _colors.popBack();
      if(!hitted) {
        _failed = true;
      }

      return hitted;
    };

    this.passed = function() {
      return _allShown && _colors.length === 0;
    };

    this.failed = function() {
      return _failed;
    }

    this.level = function() {
      return _level;
    };

    this.allShown = function() {
      return _allShown;
    };
  }
}(HugoLnx.Genius));
