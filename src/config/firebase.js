var Firebase = require("firebase");

global.firebase = new Firebase('https://hacker-news.firebaseio.com/v0');

module.exports = global.firebase;
