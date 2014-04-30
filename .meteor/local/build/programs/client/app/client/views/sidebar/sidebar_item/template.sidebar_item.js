(function(){
Template.__define__("SidebarItem", (function() {
  var self = this;
  var template = this;
  return HTML.LI("\n      ", HTML.SPAN({
    "class": [ "glyphicon text-primary ", function() {
      return Spacebars.mustache(self.lookup("icon"));
    } ]
  }), "\n      ", HTML.A({
    href: function() {
      return Spacebars.mustache(self.lookup("pathFor"), self.lookup("path"), Spacebars.kw({
        params: self.lookup(".")
      }));
    }
  }, function() {
    return Spacebars.mustache(self.lookup("name"));
  }), "\n  ");
}));

})();
