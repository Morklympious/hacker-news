"use strict";

var m = require('mithril');

m.route(global.document.body, '/', {
  '/': {
    view: function(){
    return m('h1', 'Hey!')
    }
  } 
});
