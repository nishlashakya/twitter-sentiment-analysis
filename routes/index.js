var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var Sentiment = require('sentiment');

var client = new Twitter({
  consumer_key: 'C9Yeqovr8rcbXEPgM63Jspfev',
  consumer_secret: 'dhx1cjMQztzFXemaRGTNzVDzX0swkJZGO31tc9LXHtuvcTxY1m',
  access_token_key: '2711707608-BcQEF2qgM3lIbJ6KAXSaert7z7eLwbXtK3qBJE9',
  access_token_secret: 'oGfPStGUk7OCY8PjxV7dUsphYUy5HxipOOIFNkP5Wevs0'
});
var dbData = [];

var sentimentAnalysis = new Sentiment();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Sentiment Analysis' });
});

router.post('/search', function(req, res) {
  // twitterSearch(req.body.search, function (data) {
  //   res.json(data);
  // });
  console.log(',,,,,,,,,,,,,', req.body)
  client.get('search/tweets', {q: req.body.search_word}, function(error, tweets, response) {
    for (var i = 0; i < tweets.statuses.length; i++) {
      var resp = {};
      resp.tweet = data.statuses[i];
      resp.sentiment = sentimentAnalysis(data.statuses[i].text);
      dbData.push({
        tweet: resp.tweet.text,
        score: resp.sentiment.score
      });
    console.log(dbData);
      
    };
  });
});



module.exports = router;
