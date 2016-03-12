"use strict";

// Routing logic for Mithril
var m = require('mithril');

// CSS
require('./global.css');

m.route(document.body, '/', {
  '/': require('./components/app'),
});
