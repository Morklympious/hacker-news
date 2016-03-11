"use strict"

var m    = require('mithril'),
    api  = require('../config/firebase.js'),
    item = require('./story-list-item')

module.exports = {
  controller: function() {
    var ctrl = this,
        db   = api.child('topstories').limitToFirst(25);

    ctrl.stories  = [];

    db.on('child_added', function(snap){
      ctrl.stories.push(snap.val());
      m.redraw();
    });

  },

  view: function(ctrl) {
    return m('ul', ctrl.stories.map(function(id, index){
      return m(item, {
        id: id,
        index: index
      });
    }));

  }
}
