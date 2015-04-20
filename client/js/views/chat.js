Template.chat.events({
	'click .logout': function(e) {
		e.preventDefault();
		Meteor.logout();
	}
});

Template.chat.helpers({
    gravatarUrl: function() {
        var email = Meteor.user().emails[0].address;
        var url = Gravatar.imageUrl(email, { size: 24, default: 'mm' });
        return url;
    }
});