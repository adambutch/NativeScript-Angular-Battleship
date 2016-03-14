
var gameBoardMock = require("../../shared/game-board-mock");

var fetchModule = require("fetch");
var ObservableArray = require("data/observable-array").ObservableArray;

var dialogs = require("ui/dialogs");


function GameBoardViewModel(items) {
    
    var viewModel = new ObservableArray(items);
    
    viewModel.gameBoardMap = gameBoardMock.gameBoard;
    
    viewModel.hits = {
        hit : 0,
        missed : 0,
        hitIDs : [],
        hitLabel : '',
        missedLabel : ''
    }
    
    viewModel.fireTorpedo = function(eventData) {    
               
        if (viewModel.hits.hitIDs.indexOf(eventData.object.id) != -1) {
            // double times hit in the same position
            return;
        }
        
        viewModel.hits.hitIDs.push(eventData.object.id);
        var hits = eventData.object.id.split("-");

        if (viewModel.gameBoardMap[hits[1]][hits[2]] == 1) {
            eventData.object.cssClass = 'hit-ship';
            viewModel.hits.hit++;
            dialogs.alert("HIT!");
        } else {
            eventData.object.cssClass = 'hit-empty';
            dialogs.alert("ups you missed");
            viewModel.hits.missed++;
        }
        
        viewModel.hits.hitLabel = 'Hits (' + viewModel.hits.hit + ')';
        viewModel.hits.missedLabel = 'Missed (' + viewModel.hits.missed + ')';
        
    };


    return viewModel;
}

function handleErrors(response) {
    if (!response.ok) {
        console.log(JSON.stringify(response));
        throw Error(response.statusText);
    }
    return response;
}

module.exports = GameBoardViewModel;