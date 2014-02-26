Template.configureLoginServiceDialogForOdesk.siteUrl = function () {
	return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForOdesk.fields = function () {
	return [
		{ property: 'consumerKey', label: 'Consumer key' },
		{ property: 'secret', label: 'Consumer secret' }
	];
};