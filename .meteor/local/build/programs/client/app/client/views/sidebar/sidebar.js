(function(){/*****************************************************************************/
/* Sidebar: Event Handlers and Helpers */
/*****************************************************************************/
Template.Sidebar.events({

});

Template.Sidebar.helpers({
    SideBarOptions : function(){
        return [
            {
                icon: 'glyphicon-envelope',
                name: 'Inbox',
                path: 'email.inbox'
            },
            {
                icon: 'glyphicon-send',
                name: 'Sent',
                path: 'email.sent'
            },
            {
                icon: 'glyphicon-trash',
                name: 'Trash',
                path: 'email.trash'
            },
            {
                icon: 'glyphicon-fire',
                name: 'Spam',
                path: 'email.spam'
            },
            {
                icon: 'glyphicon-cog',
                name: 'Settings',
                path: 'settings'
            }
        ];
    }
});

/*****************************************************************************/
/* Sidebar: Lifecycle Hooks */
/*****************************************************************************/
Template.Sidebar.created = function () {
};

Template.Sidebar.rendered = function () {
};

Template.Sidebar.destroyed = function () {
};

})();
