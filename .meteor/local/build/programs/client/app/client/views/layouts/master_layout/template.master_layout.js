(function(){
Template.__define__("MasterLayout", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "container-fluid"
  }, "\n        ", HTML.DIV({
    "class": "row"
  }, "\n            ", HTML.DIV({
    "class": "col-md-2",
    style: "height:1000px;background-color: #192224"
  }, "\n                ", Spacebars.include(self.lookupTemplate("Sidebar")), "\n            "), "\n            ", HTML.DIV({
    "class": "col-md-5"
  }, "\n                ", Spacebars.include(self.lookupTemplate("yield")), "\n            "), "\n            ", HTML.DIV({
    "class": "col-md-5"
  }, "\n                ", Spacebars.include(self.lookupTemplate("EmailContent")), "\n            "), "\n        "), "\n    ");
}));

})();
