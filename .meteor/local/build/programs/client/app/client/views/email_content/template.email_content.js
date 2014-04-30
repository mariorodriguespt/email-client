(function(){
Template.__define__("EmailContent", (function() {
  var self = this;
  var template = this;
  return Spacebars.With(function() {
    return Spacebars.call(self.lookup("email"));
  }, UI.block(function() {
    var self = this;
    return [ "\n        ", HTML.H1(function() {
      return Spacebars.mustache(self.lookup("subject"));
    }), "\n        ", HTML.SMALL("from ", function() {
      return Spacebars.mustache(self.lookup("sender_name"));
    }, " to You"), " -\n        ", HTML.SMALL(function() {
      return Spacebars.mustache(Spacebars.dot(self.lookup("."), "date"));
    }), "\n    ", HTML.HR(), "\n    ", HTML.P("\n        ", function() {
      return Spacebars.mustache(self.lookup("body"));
    }, "\n    "), "\n    " ];
  }));
}));

})();
