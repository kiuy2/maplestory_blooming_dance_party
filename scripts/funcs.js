const success = new Audio("audio/success.mp3");
const fail = new Audio("audio/NoMatch.mp3");
const erase = new Audio("audio/mouseOver.mp3");
const enter = new Audio("audio/shield_appear.mp3");
const helpUp = new Audio("audio/MenuUp.mp3");
const helpDown = new Audio("audio/MenuDown.mp3");
const bgm = [ new Audio("audio/18th_Event.mp3"), new Audio("audio/masterOfKeyBoard.mp3") ];
const bgmsign = [ document.createElement("img"), document.createElement("img") ];
const bgmbar = [ document.createElement("div"), document.createElement("div") ];
const bgmbar_width = [ 240, 300 ];
const rewind = new Audio("audio/rewind.mp3");
var isRewind = false;
var bgmbar_id;
var bgmbar_x = 0;
var cur_bgm = 0;
var help_visible = true;
var printq = new Array();
const inputq = new Array();

success.volume = 0.1;
erase.volume = 0.5;
enter.volume = 0.35;
helpUp.volume = 0.5;
helpDown.volume = 0.5;
rewind.volume = 0.3;

$(document).ready(function() {
    const bgmbox = document.getElementById("bgmbox");

    bgmsign[0].src = "images/switchUp.png";
    bgmsign[0].style.position = "absolute";
    bgmsign[0].style.top = "62px";
    bgmsign[1].src = "images/switchDown.png";
    bgmsign[1].style.position = "absolute";
    bgmsign[1].style.top = "62px";
    bgmsign[1].style.display = "none";
    bgmbox.appendChild(bgmsign[0]);
    bgmbox.appendChild(bgmsign[1]);

    bgm[0].volume = 0.3;
    bgm[0].loop = true;
    bgm[0].controls = true;
    bgmbox.appendChild(bgm[0]);
    bgm[1].volume = 0.3;
    bgm[1].loop = true;
    bgmbox.appendChild(bgm[1]);
    bgmbar[0].className = "bgmbar";
    bgmbar[1].className = "bgmbar";
    bgmbar[1].style.display = "none";
    bgmbox.appendChild(bgmbar[0]);
    bgmbox.appendChild(bgmbar[1]);

    var b0p0 = document.createElement("p");
    var b0p1 = document.createElement("p");
    b0p0.innerHTML = "18th_Event.mp3";
    b0p1.innerHTML = "18th_Event.mp3";
    b0p0.style.width = String(bgmbar_width[0]);
    b0p1.style.width = String(bgmbar_width[0]);
    bgmbar[0].appendChild(b0p0);
    bgmbar[0].appendChild(b0p1);
    var b1p0 = document.createElement("p");
    var b1p1 = document.createElement("p");
    b1p0.innerHTML = "masterOfKeyBoard.mp3";
    b1p1.innerHTML = "masterOfKeyBoard.mp3";
    b1p0.style.width = String(bgmbar_width[1]);
    b1p1.style.width = String(bgmbar_width[1]);
    bgmbar[1].appendChild(b1p0);
    bgmbar[1].appendChild(b1p1);
});

function bgmbar_ani() {
    bgmbar[cur_bgm].firstChild.style.left = bgmbar_x - bgmbar_width[cur_bgm];
    bgmbar[cur_bgm].lastChild.style.left = bgmbar_x - bgmbar_width[cur_bgm];
    bgmbar_x = (bgmbar_x + 2) % bgmbar_width[cur_bgm];
}

function bgmbar_rewind_ani() {
    bgmbar[cur_bgm].firstChild.style.left = bgmbar_x - bgmbar_width[cur_bgm];
    bgmbar[cur_bgm].lastChild.style.left = bgmbar_x - bgmbar_width[cur_bgm];
    bgmbar_x = Math.floor(bgmbar_x/8*7);
    if (bgmbar_x > 0) setTimeout(bgmbar_rewind_ani, 30);
    else {
        bgm[cur_bgm].play();
        isRewind = false;
        bgmbar_id = setInterval(bgmbar_ani, 60);
    }
}

function change_bgm(to_bgm) {
    //bgmbar_x = 0;
    bgm[to_bgm].currentTime = 0;
    bgm[cur_bgm].controls = false;
    bgm[to_bgm].controls = true;
    bgmsign[cur_bgm].style.display = "none";
    bgmsign[to_bgm].style.display = "block";
    bgmbar[cur_bgm].style.display = "none";
    bgmbar[to_bgm].style.display = "block";

    if (!bgm[cur_bgm].paused) {
        bgm[cur_bgm].pause();
        clearInterval(bgmbar_id);
        cur_bgm = to_bgm;
        isRewind = true;
        rewind.currentTime = 0;
        rewind.play();
        bgmbar_rewind_ani();
    }
    else {
        cur_bgm = to_bgm;
        bgmbar_x = 0;
        bgmbar[cur_bgm].firstChild.style.left = bgmbar_x - bgmbar_width[cur_bgm];
        bgmbar[cur_bgm].lastChild.style.left = bgmbar_x - bgmbar_width[cur_bgm];
    }
}

document.addEventListener('keydown', function(event) {
    const input = document.getElementById("input");
    const img = document.createElement("img");
    img.className = "arrows";

    switch(event.code) {
        case "Numpad4":
        case "ArrowLeft":
            event.preventDefault();
            inputq.push("Left");
            img.src = "images/Left.png";
            break;
        case "Numpad6":
        case "ArrowRight":
            event.preventDefault();
            inputq.push("Right");
            img.src = "images/Right.png";
            break;
        case "Numpad8":
        case "ArrowUp":
            inputq.push("Up");
            img.src = "images/Up.png";
            break;
        case "Numpad2":
        case "ArrowDown":
            inputq.push("Down");
            img.src = "images/Down.png";
            break;
        case "Digit1" :
            if (cur_bgm == 1) change_bgm(0);
            break;
        case "Digit2" :
            if (cur_bgm == 0) change_bgm(1);
            break;
        case "Digit3" :
            dancer_show = !dancer_show;
            break;
        case "Digit4" :
            cheer_show = !cheer_show;
            break;
        case "Digit5" :
            npcs_show = !npcs_show;
            break;
        case "Space":
            if (bgm[cur_bgm].paused && !isRewind) {
                bgm[cur_bgm].play();
                bgmbar_id = setInterval(bgmbar_ani, 60);
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
        case "NumpadEnter":
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

