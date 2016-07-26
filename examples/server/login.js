//var Particle = require('particle-api-js');
var Particle = require('../../');
var particle = new Particle.default();

particle.login({ username: 'name@example.com', password: 'password' })
	.then(function(data){
		console.log('API call completed on promise resolve: ', data.body.access_token);
	}, function(err) {
		console.log('API call completed on promise fail: ', err);
	});
