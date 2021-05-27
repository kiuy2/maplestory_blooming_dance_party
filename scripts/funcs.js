var success = new Audio("audio/success.mp3");
var fail = new Audio("audio/NoMatch.mp3");
var erase = new Audio("audio/mouseOver.mp3");
var enter = new Audio("audio/shield_appear.mp3");
var helpUp = new Audio("audio/MenuUp.mp3");
var helpDown = new Audio("audio/MenuDown.mp3");
var bgm = new Audio;
var help_visible = true;

success.volume = 0.1;
erase.volume = 0.5;
enter.volume = 0.35;
helpUp.volume = 0.5;
helpDown.volume = 0.5;

$(document).ready(function() {
    bgm = document.getElementById("bgm");
    bgm.volume = 0.3;
});

document.addEventListener('keydown', function(event) {
    var input = document.getElementById("input");
    var img = document.createElement("img");
    img.className = "arrows";

    switch(event.code) {
        case "ArrowLeft":
            img.src = "images/Left.png";
            break;
        case "ArrowRight":
            img.src = "images/Right.png";
            break;
        case "ArrowUp":
            img.src = "images/Up.png";
            break;
        case "ArrowDown":
            img.src = "images/Down.png";
            break;
        case "Space":
            if (bgm.paused)
                bgm.play();
            else bgm.pause();
            break;
        case "Backspace":
            erase.currentTime = 0;
            erase.play();
            input.lastElementChild.remove();
            break;
        case "Enter":
            enter.currentTime = 0;
            enter.play();
            var arrows = input.childNodes;
            for (var i=arrows.length-1; i>=0; i--) {
                arrows[i].remove();
            }
            break;
        case "KeyH":
            if (help_visible) {
                help_visible = false;
                helpUp.currentTime = 0;
                helpUp.play();
                $("#helpbox").slideUp();
            } else {
                help_visible = true;
                helpDown.currentTime = 0;
                helpDown.play();
                $("#helpbox").slideDown();
            }
            break;
    }

    if (img.src == "") return;
    else {
        if (input.childNodes.length < 11) {
            success.currentTime = 0;
            success.play();
            input.appendChild(img);
        }
        else {
            fail.currentTime = 0;
            fail.play();
        }
    }
});