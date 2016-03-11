"use strict"

var m   = require('mithril'),
    api = require('../config/firebase.js');

module.exports = {
  controller: function(attrs) {
    var ctrl = this,
        id   = attrs.id,
        db   = api.child('item' + '/' + id);

    ctrl.story = {};

    db.on('value', function(snap){
      ctrl.story = snap.val();
      m.redraw();
    });

  },

  view: function(ctrl) {
    return m('li', [
      m('div', [
        m('a', {
          href: '/stories/' + ctrl.story.id,
          config: m.route,
          story: ctrl.story
        }, ctrl.story.title)
      ])
     ])
  }
}
