
var frameModule = require("ui/frame");

var GameBoardViewModel = require("../../shared/view-models/game-board.js");
var gameBoard = new GameBoardViewModel([]);

var dialogs = require("ui/dialogs");
var view = require("ui/core/view");

var page;

exports.pageLoaded = function(args) {
    page = args.object;

    page.bindingContext = {
        gameBoard: gameBoard,
        state: 'fire'
    }

};

exports.fireTorpedo = function(eventData) {
    gameBoard.fireTorpedo(eventData);

    // console.log('in component');
    // console.log(gameBoard.hits.hit);
    // console.log(gameBoard.hits.missed);

    page.bindingContext = {
        gameBoard: gameBoard,
        state: 'fire'
    }

};

