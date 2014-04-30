(function(){
Template.__define__("EmailListItem", (function() {
  var self = this;
  var template = this;
  return HTML.LI({
    "class": "list-group-item email-list-item"
  }, "\n      ", HTML.DIV({
    "class": "row"
  }, HTML.Raw('\n        <div class="col-md-2">\n            photo\n        </div>\n        '), HTML.DIV({
    "class": "col-md-3"
  }, "\n            ", function() {
    return Spacebars.mustache(self.lookup("sender_name"));
  }, "\n        "), "\n        ", HTML.DIV({
    "class": "col-md-4"
  }, "\n            ", function() {
    return Spacebars.mustache(self.lookup("subject"));
  }, "\n        "), "\n        ", HTML.DIV({
    "class": "col-md-3"
  }, "\n            ", function() {
    return Spacebars.mustache(self.lookup("date"));
  }, "\n        "), "\n      "), "\n  ");
}));

})();
