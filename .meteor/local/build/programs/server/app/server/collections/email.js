(function(){/*
 * Add query methods like this:
 *  Email.findPublic = function () {
 *    return Email.find({is_public: true});
 *  }
 */

Email.allow({
  insert: function (userId, doc) {
    return userId;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return doc.user_id === userId;
  },

  remove: function (userId, doc) {
    return doc.user_id === userId;
  }
});

Email.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});

console.log(Email);

/*
Email.before.insert(function(userId, doc){
    doc.subject = 'Server says: I decide the message subject';
});*/

})();
