// ==UserScript==
// @name         Lyrania CSS Layout Fix
// @version      0.1.2
// @description  HTML and CSS changes to allow for easier layout and color changes.
// @author       Vibblez
// @updateURL	 https://raw.githubusercontent.com/Vibblez/Lyrania/master/Lyrania.Layout.Fix.user.js
// @match        https://lyrania.co.uk/game.php
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    $('#side1').insertBefore( $('#main') );

    function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }

    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
    }

    addGlobalStyle('body { background-color: #000 !important; background-image: none;  }');
    addGlobalStyle('select { height: 25px }');
    addGlobalStyle('#holder { width: 1000px; }');
    addGlobalStyle('#header { position: relative; margin-top: 10px; border-radius: 5px; border: 0px; border-top: 1px #fff solid; border-bottom: 1px #fff solid; width: 100%; background-image: none; background-color: #111; }');
    addGlobalStyle('#main { position: relative; border: 0px; border-top: 1px #fff solid; border-bottom: 1px #fff solid; float: left; top: auto; left: auto; margin: 0px; margin-top: 10px; width: 596px; background-image: none; background-color: #111; }');
    addGlobalStyle('#side1 { position: relative; border-radius: 15px 0px 0px 15px;border: 1px solid;border-right: 0;top: auto;float: left;margin: 0px;margin-top: 10px;width: 197px;background-image: none; background-color: #222; }');
    addGlobalStyle('#side2 { border: solid 1px #fff;border-left: 0px;position: relative;border-radius: 0px 15px 15px 0px;float: left;left: auto;bottom: auto;margin: 0px;margin-top: 10px;width: 197px; background-image: none; background-color: #222; }');
    addGlobalStyle('#chat { position: relative; margin-top: 10px; width: 100%; float: left; border-radius: 5px; top: 0; padding: 10px 10px 15px 10px; max-width: fit-content; }');
    addGlobalStyle('#chatwindow { padding: 5px; width: 100%; position: relative; left: auto; top: 0; max-width: fit-content; margin-top: 10px; }');
    addGlobalStyle('#inputchat, #chatbutton, input, select { background-image: none; background-color: #111; }');
    addGlobalStyle('#inputchat { width: 70% } ');
    addGlobalStyle('#popupholder {    position: fixed;    left: auto;    right: auto;    top: 50px;    bottom: auto;    z-index: 10;    width: 800px;    margin-left: 100px;    height: 570px;    text-align: center;    overflow: auto; }');

    addGlobalStyle('#mainnav { margin: 5px; } ');

addGlobalStyle(' #bannerholder: border: 1px solid #ffffff;background-color: #000000;background-image: none;background-size: 100%;background-origin: content;width: 100%;max-width: fit-content;margin-top: 5px;} #bannerholder { position: relative; left: auto; right: auto; z-index: 8;'); 
})();