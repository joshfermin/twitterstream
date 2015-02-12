var Twit 	 = require('twit'), // wrapper on top of twitter api
	dotenv	 = require('dotenv'); // used for keys -> get from .env

module.exports = function(app) {
	dotenv.load();

	var T = new Twit({
	    consumer_key: 			process.env.TWITTER_CONSUMER_KEY,
	    consumer_secret: 		process.env.TWITTER_SECRET_KEY,
	    access_token: 			process.env.TWITTER_ACCESS_TOKEN,
	    access_token_secret: 	process.env.TWITTER_ACCESS_KEY
	});


	var stream = T.stream('statuses/sample')
	stream.on('tweet', function(tweet){
		console.log(tweet);
	})

	app.get('/', function(req,res){
		T.get('search/tweets', {q: 'banana since:2011-11-11', count: 100}, function(err, data, response){
			res.send(data);
		})
	});


}