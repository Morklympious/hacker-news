"use strict"

var m     = require('mithril'),
    api   = require('../lib/firebase.js'),
    story = require('./story'),

    css  = require('./css/story-list.css');

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
    return m('div', [
      m('h1', 'Hacker News'),
      m('ul', {class: css.list}, ctrl.stories.map(function(id, index){
        return m(story, {id: id});
      }))
    ]);
  }
}
