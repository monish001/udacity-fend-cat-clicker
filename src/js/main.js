'use strict';

/**
 * app namespace
 */
var catApp = catApp || {};

/**
 * Constants
 */
(function(app){
    app.CONSTANTS = app.CONSTANTS || {};
    app.CONSTANTS.CAT_APP_1_ID_NAME = `cat-app-1`;
    app.CONSTANTS.CAT_APP_2_ID_NAME = `cat-app-2`;
    app.CONSTANTS.CAT_IMAGE_CLASS_NAME = `cat-app__img`;
    app.CONSTANTS.CAT_SCORE_CLASS_NAME = `cat-app__score`;
})(catApp);

(function(app, doc) {
    function Game(domId) {
        var self = this;
        this.elGame = doc.querySelector(`#${domId}`);
        this.elGameImg = this.elGame.querySelector(`.${app.CONSTANTS.CAT_IMAGE_CLASS_NAME}`);
        this.elGameScore = this.elGame.querySelector(`.${app.CONSTANTS.CAT_SCORE_CLASS_NAME}`);
        this.score = 0;

        this.elGameImg.addEventListener('click', function(){
            self.handleClick();
        }, false);
    }
    Game.prototype.handleClick = function(){
        this.score++;
        this.elGameScore.innerText = `Score: ${this.score}`;
    };
    app.Game = Game;
})(catApp, document);


/**
 * Game bootstrapping
 */
(function(app){
    var game1 = new app.Game(app.CONSTANTS.CAT_APP_1_ID_NAME);
    var game2 = new app.Game(app.CONSTANTS.CAT_APP_2_ID_NAME);
})(catApp);
