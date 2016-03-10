"use strict"

var m    = require('mithril'),
    db   = require('../../config/firebase.js'),
    item = require('../story-list-item')

module.exports = {
  controller: function() {
    var ctrl      = this,
        endpoint  = db.child('topstories');

    ctrl.stories   = m.prop([]);

    endpoint.on('value', function(snap){
      ctrl.stories(snap.val());

      m.redraw();
    });

  },

  view: function(ctrl) {
    return m('.list', ctrl.stories().map(function(id){
      return m(item, {id: id});
    }));

  }
}
