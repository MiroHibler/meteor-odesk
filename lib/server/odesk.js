Odesk = {};

var urls = {
	requestToken: 'https://www.odesk.com/api/auth/v1/oauth/token/request',
	authorize	: 'https://www.odesk.com/services/api/auth',	// Not sure but seems to work
	accessToken	: 'https://www.odesk.com/api/auth/v1/oauth/token/access',
	authenticate: 'https://www.odesk.com/services/api/auth'
};


Odesk.whitelistedFields = ['portrait_32_img', 'profile_url'];

Oauth.registerService( 'odesk', 1, urls, function ( oauthBinding ) {
	var identity = oauthBinding.get( 'https://www.odesk.com/api/auth/v1/info.json' ).data;

	var serviceData = {
		id					: identity.info.ref,
		screenName			: identity.auth_user.uid,
		accessToken			: oauthBinding.accessToken,
		accessTokenSecret	: oauthBinding.accessTokenSecret
	};

	// include helpful fields from oDesk
	var fields = _.pick( identity.info, Odesk.whitelistedFields );
	_.extend( serviceData, fields );

	return {
		serviceData	: serviceData,
		options		: {
			profile: {
				name: identity.auth_user.first_name + ' ' + identity.auth_user.last_name
			}
		}
	}
});


Odesk.retrieveCredential = function( credentialToken ) {
	return Oauth.retrieveCredential( credentialToken );
};