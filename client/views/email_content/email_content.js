/*****************************************************************************/
/* EmailContent: Event Handlers and Helpers */
/*****************************************************************************/
Template.EmailContent.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EmailContent.helpers({
    email: function(){
        return Session.get('currentViewingEmail');
    },

    showEmail : function(id){
        Session.set('currentViewingEmail', this.getEmail(id));
        console.log(this.email);
    },

    getEmail: function(id){
        return Email.findOne(id);
    }

  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* EmailContent: Lifecycle Hooks */
/*****************************************************************************/
Template.EmailContent.created = function () {
};

Template.EmailContent.rendered = function () {
};

Template.EmailContent.destroyed = function () {
};
