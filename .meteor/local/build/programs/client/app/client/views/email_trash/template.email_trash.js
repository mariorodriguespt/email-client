(function(){
Template.__define__("EmailTrash", (function() {
  var self = this;
  var template = this;
  return [ HTML.Raw('<div class="row">\n        <div class="col-md-6">\n            <h1>Trash</h1>\n        </div>\n        <div class="col-md-6 text-right">\n            <input type="text">\n        </div>\n    </div>\n    <hr>\n    '), HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "col-lg-12"
  }, "\n            ", HTML.UL({
    "class": "list-group"
  }, "\n                ", UI.Each(function() {
    return Spacebars.call(self.lookup("email"));
  }, UI.block(function() {
    var self = this;
    return [ "\n                ", Spacebars.include(self.lookupTemplate("EmailListItem")), "\n                " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n                ", HTML.H1("You have no trash."), "\n                " ];
  })), "\n            "), "\n        "), "\n    ") ];
}));

})();
