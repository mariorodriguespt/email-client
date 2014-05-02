(function(){/*****************************************************************************/
/* Spam Publish Functions
/*****************************************************************************/

Meteor.publish('personal_spam_email', function () {
    return Email.find({
        user_id: this.userId,
        spam   : true
    });
});

})();
