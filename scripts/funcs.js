const success = new Audio("audio/success.mp3");
const fail = new Audio("audio/NoMatch.mp3");
const erase = new Audio("audio/mouseOver.mp3");
const enter = new Audio("audio/shield_appear.mp3");
const helpUp = new Audio("audio/MenuUp.mp3");
const helpDown = new Audio("audio/MenuDown.mp3");
var bgm = [];
var cur_bgm = 0;
var bgmbar;
var bgmbar_id;
var bgmbar_x = 0;
var help_visible = true;
var printq = [];
const inputq = [];

success.volume = 0.1;
erase.volume = 0.5;
enter.volume = 0.35;
helpUp.volume = 0.5;
helpDown.volume = 0.5;

$(document).ready(function() {
    bgm.push(new Audio);
    bgm[0] = document.getElementById("bgm1");
    bgm[0].volume = 0.3;
    bgm[0].controls = true;
    bgm.push(new Audio);
    bgm[1] = document.getElementById("bgm2");
    bgm[1].volume = 0.3;
    //bgmbar = document.getElementById("bgm");
});

function bgmbar_ani() {
    // $("#bgmbox p").
    // bgmbar_x = 
}

document.addEventListener('keydown', function(event) {
    const input = document.getElementById("input");
    const img = document.createElement("img");
    img.className = "arrows";

    switch(event.code) {
        case "ArrowLeft":
            inputq.push("Left");
            img.src = "images/Left.png";
            break;
        case "ArrowRight":
            inputq.push("Right");
            img.src = "images/Right.png";
            break;
        case "ArrowUp":
            inputq.push("Up");
            img.src = "images/Up.png";
            break;
        case "ArrowDown":
            inputq.push("Down");
            img.src = "images/Down.png";
            break;
        case "Digit1" :
            cur_bgm = 0;
            if (!bgm[1].paused) {
                bgm[1].pause();
                bgm[0].play();
            }
            break;
        case "Digit2" :
            cur_bgm = 1;
            if (!bgm[0].paused) {
                bgm[0].pause();
                bgm[1].play();
            }
            break;
        case "Space":
            if (bgm[cur_bgm].paused) {
                bgm[cur_bgm].play();
                bgmbar_id = setInterval(bgmbar_ani, 90);
            }
            else {
                bgm[cur_bgm].pause();
                clearInterval(bgmbar_id);
            }
            break;
        case "Backspace":
            erase.currentTime = 0;
            erase.play();
            input.lastElementChild.remove();
            inputq.pop();
            break;
        case "Enter":
            enter.currentTime = 0;
            enter.play();
            input.innerHTML = "";
            printq = printq.concat(inputq);
            inputq.length = 0;
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
        if (input.childNodes.length < 10) {
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

