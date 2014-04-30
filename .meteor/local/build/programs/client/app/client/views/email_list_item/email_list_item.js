(function(){/*****************************************************************************/
/* EmailListItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.EmailListItem.events({
    'click .email-list-item' : function(e, tmpl){

        Template.EmailContent.showEmail( this._id );
        console.log(this);
    }
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EmailListItem.helpers({
    date : function(){
        return jQuery.timeago(this.date);
    }
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* EmailListItem: Lifecycle Hooks */
/*****************************************************************************/
Template.EmailListItem.created = function () {
};

Template.EmailListItem.rendered = function () {
};

Template.EmailListItem.destroyed = function () {
};

})();
