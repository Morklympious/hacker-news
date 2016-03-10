"use strict"

var m    = require('mithril'),
    db   = require('../../config/firebase.js'),
    item = require('../story-list-item')

module.exports = {
  controller: function() {
    var ctrl      = this,
        endpoint  = db.child('topstories').limitToFirst(25);

    ctrl.stories  = [];

    endpoint.on('child_added', function(snap){
      ctrl.stories.push(snap.val());

      m.redraw();
    });

  },

  view: function(ctrl) {
    return m('h1', 'STORY PAGE');
  }
}
