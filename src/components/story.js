"use strict"

var m   = require('mithril'),
    api = require('../lib/firebase'),

    css = require('./css/story.css');

module.exports = {
  controller: function(attrs) {
    var ctrl = this,
        id   = attrs.id,
        db   = api.child('item' + '/' + id);

    ctrl.story = {};

    // Assign the story when we get the data
    db.on('value', function(snap){
      ctrl.story = snap.val();
      m.redraw();
    });

  },

  view: function(ctrl) {

    return m('li', {class: css.item}, [
      m('div', {class: css.container}, [
        m('a', {
          class:  css.link,
          href:   ctrl.story.url,
          target: '_blank',
        }, ctrl.story.title)
      ])
    ]);

  }
}
