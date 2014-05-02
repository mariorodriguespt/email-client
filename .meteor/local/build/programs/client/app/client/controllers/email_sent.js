(function(){EmailSentController = RouteController.extend({
  waitOn: function () {
    Meteor.subscribe('personal_sent_email');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});

})();
