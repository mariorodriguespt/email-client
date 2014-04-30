(function(){EmailInboxController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('personal_email');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});

})();
