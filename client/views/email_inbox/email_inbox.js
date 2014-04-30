/*****************************************************************************/
/* EmailInbox: Event Handlers and Helpers */
/*****************************************************************************/
Template.EmailInbox.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EmailInbox.helpers({
    emailId : null,

    email : function(){
        return Email.find({},{
            sort: {
                date : -1
            }
        });
    }
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* EmailInbox: Lifecycle Hooks */
/*****************************************************************************/
Template.EmailInbox.created = function () {
};

Template.EmailInbox.rendered = function () {
};

Template.EmailInbox.destroyed = function () {
};
