var m = require("mithril");

// CSS
require("./global.css");

m.route(document.body, "/stories", {
  "/stories" : require("./components/story-list")
});
