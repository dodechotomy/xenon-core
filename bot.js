var Twit = require('twit');
var TwitterBot = require('node - twitterbot').TwitterBot;
var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [
    ">< recog ack 01 hello",
    ">< recog ack 02 greetings",
    ">< recog ack 03 hail and well met",
    ">< rep stat 01 primary differential analysis engine green",
    ">< rep stat 02 secondary harmonic quantifier system green",
    ">< rep stat 03 tertiary graviton suspension matrix green"
];

function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", " + chooseRandom(phraseArray);
Bot.tweet(phrase);
