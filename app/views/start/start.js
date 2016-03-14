
var frameModule = require("ui/frame");

function pageLoaded(args) {
    var page = args.object;
}
exports.pageLoaded = pageLoaded;

exports.newGame = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/build-game/build-game");
};

exports.joinGame = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/game/game");
};