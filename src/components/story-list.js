"use strict";

var m    = require("mithril"),
    api  = require("../config/firebase.js"),
    item = require("./story-list-item"),

    css  = require("./css/story-list.css");

module.exports = {

  controller : function() {
    var ctrl = this,
        db   = api.child("topstories").limitToFirst(25);

    ctrl.stories  = [];

    db.on("child_added", function(snap) {
      ctrl.stories.push(snap.val());
      m.redraw();
    });
  },

  view : function(ctrl) {
    return m("div", { class : "container" }, [
      m("ul", { class : css.list }, ctrl.stories.map(function(id, index) {
        return m(item, {
          id    : id,
          index : index
        });
      }))
    ]);
  }
};
