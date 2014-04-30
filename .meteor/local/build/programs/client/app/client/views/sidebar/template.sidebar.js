(function(){
Template.__define__("Sidebar", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("loginButtons")), "\n    ", HTML.DIV("\n        ", HTML.UL("\n            ", UI.Each(function() {
    return Spacebars.call(self.lookup("SideBarOptions"));
  }, UI.block(function() {
    var self = this;
    return [ "\n                ", Spacebars.include(self.lookupTemplate("SidebarItem")), "\n            " ];
  })), "\n        "), "\n    ") ];
}));

})();
