"use strict";

var m = require('mithril');

m.route(document.body, '/stories', {
  '/stories':         require('./components/story-list'),
  '/stories/:story':  require('./components/story'),
});
