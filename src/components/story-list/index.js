"use strict"

var m  = require('mithril'),
    db = require('../../config/firebase.js');

module.exports = {
  controller: function() {
    var ctrl = this,
        top  = db.child('topstories');

    ctrl.stories = m.prop([]);

    top.on('value', function(snapshot){
      ctrl.stories(snapshot.val());
      m.redraw();
    });

  },

  view: function(ctrl) {
    return m('.list', ctrl.stories().map(function(story){
      return m('h2', story);
    }));

  }
}
