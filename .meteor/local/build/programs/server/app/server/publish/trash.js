(function(){/*****************************************************************************/
/* Trash Publish Functions
/*****************************************************************************/

Meteor.publish('personal_trash_email', function () {
    return Email.find({
        user_id: this.userId,
        trash  : true
    });
});

})();
