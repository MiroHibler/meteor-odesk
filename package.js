Package.describe({
	summary: "oDesk Login OAuth Flow"
});

Package.on_use( function( api ) {
	api.use( 'http', ['client', 'server'] );
	api.use( 'templating', 'client' );
	api.use( 'oauth1', ['client', 'server'] );
	api.use( 'oauth', ['client', 'server'] );
	api.use( 'random', 'client' );
	api.use( 'underscore', 'server' );
	api.use( 'service-configuration', ['client', 'server'] );

	// Service Name has to be capitalized
	api.export( 'Odesk' );

	api.add_files( ['lib/odesk_configure.html', 'lib/odesk_configure.js'], 'client' );

	api.add_files( 'lib/server/odesk.js', 'server' );
	api.add_files( 'lib/client/odesk.js', 'client' );
});