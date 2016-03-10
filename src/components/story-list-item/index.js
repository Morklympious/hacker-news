"use strict"

var m  = require('mithril'),
    db = require('../../config/firebase.js');

module.exports = {
  controller: function(attrs) {
    var ctrl     = this,
        id       = attrs.id,
        endpoint = db.child('item' + '/' + id);

    ctrl.story = {};

    endpoint.on('value', function(snap){

      var snapshot = snap.val();


      ctrl.story.title = snapshot.title;
      ctrl.story.id    = snapshot.id;

      m.redraw();
    });

  },

  view: function(ctrl) {
    return m('.list', [
       m('.story-list-item', [
         m('a', {href: '/stories/' + ctrl.story.id, config: m.route}, ctrl.story.title)
       ])
    ]);

  }
}
