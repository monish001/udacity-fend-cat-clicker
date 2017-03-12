/**
    If you're writing Cat Clicker with vanilla JS (no jQuery), you'll be adding the "click" event with elem.addEventListener().

    var elem = document.getElementById('my-elem');
    elem.addEventListener('click', function(){
    //the element has been clicked... do stuff here
    }, false);
    If you're using jQuery, you'll be adding the "click" event listener with jQuery.click().

    $('#my-elem').click(function(e) {
    //the element has been clicked... do stuff here
    });
 */

var catApp = catApp || {};

(function(app){
    app.CONSTANTS = app.CONSTANTS || {};
    app.CONSTANTS.CAT_IMAGE_CLASS_NAME = `cat-app__img`;
    app.CONSTANTS.CAT_SCORE_CLASS_NAME = `cat-app__score`;
})(catApp);

(function(app){
    var score = 0;
    function incScore(){
        score++;
    }
    function getCurrentScore(){
        return score;
    }
    app.scoreManager = {
        getCurrentScore: getCurrentScore,
        incScore: incScore
    };
})(catApp);

(function(app, document){
    var elAppImg = document.getElementsByClassName(app.CONSTANTS.CAT_IMAGE_CLASS_NAME)[0];
    var elAppScore = document.getElementsByClassName(app.CONSTANTS.CAT_SCORE_CLASS_NAME)[0];

    function init(){
        elAppScore.innerText = `Score: 0`;
        elAppImg.addEventListener('click', function(){
            app.scoreManager.incScore();
            var curScore = app.scoreManager.getCurrentScore();
            elAppScore.innerText = `Score: ${curScore}`;
        }, false);
    }
    init();
})(catApp, document);
