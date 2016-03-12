"use strict";

var m    = require('mithril'),
    list = require('./story-list');


module.exports = {
  controller: function() {

  },

  view: function() {
    return m('.container', [
      m('h1', 'Hacker News'),
      m(list)
    ])
  }
}
