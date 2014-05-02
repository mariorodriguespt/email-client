(function(){/*****************************************************************************/
/* Sent Publish Functions
/*****************************************************************************/

Meteor.publish('personal_sent_email', function () {
  return Email.find({
      user_id      : this.userId,
      sent_by_user : true
  });
});

})();
