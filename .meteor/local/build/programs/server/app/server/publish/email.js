(function(){/*****************************************************************************/
/* Email Publish Functions
/*****************************************************************************/

Meteor.publish('personal_email', function () {
  // you can remove this if you return a cursor
  return Email.find({
      user_id: this.userId,
      trash  : {$exists:false},
      spam   : {$exists:false}
  });
});

})();
