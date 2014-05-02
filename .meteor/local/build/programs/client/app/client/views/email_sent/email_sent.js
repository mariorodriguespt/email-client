(function(){/*****************************************************************************/
/* EmailSent: Event Handlers and Helpers */
/*****************************************************************************/
Template.EmailSent.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EmailSent.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */

    email : function(){
        return Email.find({},{
            sort: {
                date : -1
            }
        });
    }
});

/*****************************************************************************/
/* EmailSent: Lifecycle Hooks */
/*****************************************************************************/
Template.EmailSent.created = function () {
};

Template.EmailSent.rendered = function () {
};

Template.EmailSent.destroyed = function () {
};

})();
