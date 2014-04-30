(function(){/*****************************************************************************/
/* Login: Event Handlers and Helpers */
/*****************************************************************************/
Template.Login.events({
  'submit #form-login' : function(e, tmpl){
      e.preventDefault();

      var email = tmpl.find('#login-email').value,
          password = tmpl.find('#login-password').value;

      Meteor.loginWithPassword(email, password, function(error){
        if(error){
            console.log('login failed');
            console.log(error);
        }
        else{
            Router.go( Router.path('email.inbox') );
        }
      });

  }
});

Template.Login.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};

})();
