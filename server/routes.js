var Twit 	 = require('twit'),
	dotenv	 = require('dotenv');

module.exports = function(app) {
dotenv.load();

var T = new Twit({
    consumer_key: 			process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: 		process.env.TWITTER_SECRET_KEY,
    access_token: 			process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: 	process.env.TWITTER_ACCESS_KEY
});


app.get('/', function(req,res){
	T.get('search/tweets', {q: 'banana since:2011-11-11', count: 100}, function(err, data, response){
		res.send(data);
	})
});


}