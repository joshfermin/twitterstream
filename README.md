# twitterstream
Simple express app that streams in a sample of live tweets and performs sentiment analysis on them. Implemented using Node.js and Express.

## To Run: 
1. Add a file name ".env" that contains your twitter API keys in the root directory. It should be in the following format:
```
TWITTER_CONSUMER_KEY=xxxx
TWITTER_SECRET_KEY=xxxx
TWITTER_ACCESS_TOKEN=xxxx
TWITTER_ACCESS_KEY=xxxx
```

2. Install dependencies
```
npm install
```

3. Start server and you should see incoming tweets. See routes.js to see what is streaming.
```
npm start
```
