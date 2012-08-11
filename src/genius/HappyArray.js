(function(Genius) {
  Genius.HappyArray = function() {
    this.popBack = function() {
      var element = this.reverse().pop();
      this.reverse();
      return element;
    };
  }

  Genius.HappyArray.prototype = new Array;
}(HugoLnx.Genius));
