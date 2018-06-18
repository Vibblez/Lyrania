// ==UserScript==
// @name         Lyrania 
// @version      0.2.2
// @description  HTML and CSS changes to allow for easier layout changes, and a quick menu for some other stuff.
// @author       Vibblez
// @updateURL	 https://raw.githubusercontent.com/Vibblez/Lyrania/master/Lyrania.Layout.Fix.user.js
// @match        https://lyrania.co.uk/game.php
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
'use strict';

    //////////
    // Dark Theme
    //////////

    function htmlFix (){
        $("<div id='middle'></div>").insertAfter('#header');
        $("<div id='mainContainer'></div>").appendTo($("#middle"));
        $('#main').appendTo($('#mainContainer'));
        $('#side1').insertBefore($('#mainContainer'));
        $('#side2').appendTo($('#middle'));
        $("<div id='headerContents'></div>").prependTo("#header");
        $("#header > ul").each(function(e){
            $(this).removeAttr('style');
            $("#headerContents").append($(this));
        });
    }

	function addGlobalStyle(css) {
		var head, style;
		head = document.getElementsByTagName('head')[0];
		if (!head) { return; }
		style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = css;
		head.appendChild(style);
	}

    function runAllStyleAdds(){
	addGlobalStyle('body { background-color: #000 !important; background-image: none; font-size: 12px;  }');
	addGlobalStyle('select { height: 25px }');
	addGlobalStyle('#holder { width: 95%; min-width: 1000px; }');
	addGlobalStyle('#header { position: relative; margin-top: 10px; border-radius: 5px; border: 0px; border-top: 1px #fff solid; border-bottom: 1px #fff solid; width: 100%; max-width: 100%; background-image: none; background-color: #111; }');
    addGlobalStyle('#header > #headerContents > ul > li, #unreadmail, #opentickets, #side1 > span,  { font-size: 11px; }');
    addGlobalStyle('#mainContainer { position: relative; float: left;   width: 59%;    background-color: #111;    margin-top: 10px;    height: 370px;    border-top: 1px white solid;    border-bottom: 1px white solid; }');
	addGlobalStyle('#main { position: relative; border: 0px; background-image: none; background-color: #111; top: 0; left:0; margin-left: auto;    margin-right: auto; }');
    addGlobalStyle('#middle { width: 100%; } ');
    addGlobalStyle('#side1 { position: relative; border-radius: 15px 0px 0px 15px;border: 1px solid;border-right: 0;top: auto;float: left;margin: 0px;margin-top: 10px;width: 20%;background-image: none; background-color: #222; }');
	addGlobalStyle('#side2 { border: solid 1px #fff;border-left: 0px;position: relative;border-radius: 0px 15px 15px 0px;float: left;left: auto;bottom: auto;margin: 0px;margin-top: 10px;width: 20%; background-image: none; background-color: #222; }');
	addGlobalStyle('#chat { position: relative; margin-top: 10px; width: 100%; float: left; border-radius: 5px; top: 0; padding: 10px 10px 15px 10px; max-width: fit-content; height: auto; }');
	addGlobalStyle('#chatwindow { padding: 5px; width: 100%; position: relative; left: auto; top: 0; max-width: fit-content; margin-top: 10px; resize: vertical; height: 250px; }');
	addGlobalStyle('#inputchat, #chatbutton, input, select { background-image: none; background-color: #111; }');
	addGlobalStyle('#inputchat { width: 70% } ');
	addGlobalStyle('#popupholder { position: fixed;    left: auto;    right: auto;    top: 50px;    bottom: auto;    z-index: 10;    width: 800px;    margin-left: 100px;    height: 570px;    text-align: center;    overflow: auto; }');
	addGlobalStyle('#mainnav { margin: 5px; } ');
	addGlobalStyle('#bannerholder: border: 1px solid #ffffff;background-color: #000000;background-image: none;background-size: 100%;background-origin: content;width: 100%;max-width: fit-content;margin-top: 5px;} #bannerholder { position: relative; left: auto; right: auto; z-index: 8;');
	addGlobalStyle('#loadoutspacer {    float: right;    width: 0px;    height: 185px; }');
	addGlobalStyle('#content { padding-left: 5px; padding-right: 5px; } ');
	addGlobalStyle('#content > div > div { font-size: 12px; }');
	addGlobalStyle('#popupholder { border: 1px solid #fff; background-image: none; background-color: #080808; }');
    addGlobalStyle('#headerContents { width: 100%; height: inherit; } ');
    addGlobalStyle('#headerContents > ul:nth-of-type(odd) { width: 5%; min-width: 56px; }');
    addGlobalStyle('#headerContents > ul:nth-of-type(even) { width: 10%; min-width: 110px; }');
    addGlobalStyle('#headerContents > ul:nth-of-type(9) { width: 10%; min-width: 170px; float: right; }');
    addGlobalStyle('#headerContents > ul { width: 8.5%; list-style: none; display: inline-block; padding-left: 5px; float: left; }');
    }

    //////
    // QUICK MENU
    //////

    function bindEquipLink(){
        $('.vibblez-equip').click(function(){
            vibblezloadout();
        });
    }

    function bindPetBtn(){
        $('#vib-changepet').click(function(){
            vibblezchangepet();
        });
    }

    var vibblezloadout = function () {
        var i = $("#vibblez-loadout").val();
        console.log(i);
        $.post( "loadout.php", { x:2, y: i})
            .done(function( data ) {
            console.log("Equipment changed");
        });
    }

    var AddPetMenu = function () {
        $.get('pet.php', function(data) {
            var petList = $(data)[0];
            petList = $(petList).attr("id","vibpet");
            petList = $(petList).removeAttr("onchange");
            petList = $(petList).removeAttr("style");
            var petMenu = $("<div id='vibpetmenu' style='padding-top: 30px; padding-left: 10px;'><div>");
            var changeBtn = $("<input type='button' value='Swap Pet' id='vib-changepet'>");
            petMenu.append(petList);
            petMenu.append(changeBtn);
            $("#VibblezMenu").append(petMenu);
            bindPetBtn();
        });
    }

    var vibblezchangepet = function () {
        $.post('petselect.php', {x: $("#vibpet").val(), y: 0})
        .done(function(data){
            $.post('pet.php').done(function(data){
                eval(data.split('[BREAK]')[1]);
            });
        });
    }

    var AddPotionAndJewelStuff = function () {
        $.get('loadoutpotions.php', function(data) {
            data = data.replace('<div id="loadoutspacer"></div>','');
            data = data.replace("<a href = 'javascript:loadout(2);'>", "<a href = 'javascript:;' class='vibblez-equip'>");
            data = data.replace("<select id = 'loadout'>", "<select id = 'vibblez-loadout'>");
            $("#VibblezMenu").append(data);
            bindEquipLink();
        });
    }

    var NewMenu = function () {
        var menu = $("<div id='VibblezMenu' style='    border: 1px solid #fff;    background: #000;    height: 110px;    position: relative;    width: 100%;    float: left;    margin-top: 10px;'><span style='position: absolute;top: 0;left: 0;padding: 5px;font-size: 14;font-weight: bold;'>Vibblez Quick Menu</span></div>");
        $(menu).insertAfter("#chat");
        AddPotionAndJewelStuff();
        AddPetMenu();
    }


    //////
    // Init
    //////
    htmlFix();
    NewMenu();
    runAllStyleAdds();
})();