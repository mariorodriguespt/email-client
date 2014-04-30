/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

var IR_beforeHooks = {
    checkIfUserIsLogged : function(){
        console.log('checkIfUserIsLogged called');
        if (!Meteor.user()){
            this.render('login');
            this.stop();
            console.log('Showing login screen');
        }
    }
};

Router.onBeforeAction(IR_beforeHooks.checkIfUserIsLogged);

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */

  this.route('login', {
      path: '/',
      layoutTemplate: 'LoginLayout'
  });

    this.route('login', {
      path: '/Login',
      layoutTemplate: 'LoginLayout'
  });
  this.route('email.inbox', {path: '/Inbox'});

  this.route('email.sent', {path: '/Sent'});
  this.route('email.sent', {path: '/Sent/:_id'});
  this.route('email.trash', {path: '/Trash'});
  this.route('email.spam', {path: '/Spam'});
  this.route('settings', {path: '/Settings'});
});
