# twitterstream
Simple express app that streams in a sample of live tweets and performs sentiment analysis on them. Implemented using Node.js and Express.

## To Run: 
 Add a file named ".env" that contains your twitter API keys in the root directory. It should be in the following format:
```
TWITTER_CONSUMER_KEY=xxxx
TWITTER_SECRET_KEY=xxxx
TWITTER_ACCESS_TOKEN=xxxx
TWITTER_ACCESS_KEY=xxxx
```

Install dependencies
```
npm install
```

Start server and you should see incoming tweets. See routes.js to see what is streaming.
```
npm start
```
