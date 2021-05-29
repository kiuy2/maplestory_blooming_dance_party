const dancer_stand = [];
const dancer_left = [];
const dancer_right = [];
const dancer_up = [];
const dancer_down = [];
var prev_frame;
var stand_idx = 0;

$(document).ready(function() {
    const objects = document.getElementById("objects");
    const NPC = document.createElement("img");
    const cheer0 = document.createElement("img");
    const cheer1 = document.createElement("img");
    const dancer = document.createElement("div");

    // NPC
    NPC.style.position = "absolute";
    NPC.style.top = "262px";
    NPC.style.left = "1169px";
    NPC.src = "images/9062540.gif";
    objects.appendChild(NPC);
    // cheer0
    cheer0.style.position = "absolute";
    cheer0.style.top = "530px";
    cheer0.style.left = "240px";
    cheer0.src = "images/cheer0.gif";
    objects.appendChild(cheer0);
    // cheer1
    cheer1.style.position = "absolute";
    cheer1.style.top = "530px";
    cheer1.style.left = "1040px";
    cheer1.src = "images/cheer1.gif";
    objects.appendChild(cheer1);
    // dancer
    dancer.style.position = "absolute";
    dancer.style.top = "390px";
    dancer.style.left = "545px";
    objects.appendChild(dancer);

    for (var i=0; i<6; i++) {
        dancer_stand.push(document.createElement("img"));
        dancer_stand[i].src = "images/9062538.img.stand.frames/"+String(i*120)+".png";
        dancer_stand[i].style.display = "none";
        dancer.appendChild(dancer_stand[i]);
    }
    dancer_stand[0].style.display = "block";
    for (var i=0; i<12; i++) {
        dancer_left.push(document.createElement("img"));
        dancer_right.push(document.createElement("img"));
        dancer_up.push(document.createElement("img"));
        dancer_down.push(document.createElement("img"));
        dancer_left[i].src = "images/9062538.img.left.frames/"+String(i*90)+".png";
        dancer_right[i].src = "images/9062538.img.right.frames/"+String(i*90)+".png";
        dancer_up[i].src = "images/9062538.img.up.frames/"+String(i*90)+".png";
        dancer_down[i].src = "images/9062538.img.down.frames/"+String(i*90)+".png";
        dancer_left[i].style.display = "none";
        dancer_right[i].style.display = "none";
        dancer_up[i].style.display = "none";
        dancer_down[i].style.display = "none";
        dancer.appendChild(dancer_left[i]);
        dancer.appendChild(dancer_right[i]);
        dancer.appendChild(dancer_up[i]);
        dancer.appendChild(dancer_down[i]);
    }

    prev_frame = dancer_stand[0];
    dance_stand();
    //stand_id = setInterval(dance_stand, 120);
});

function dance() {
    prev_frame.style.display = "none";
    var length = printq.length;
    var each_delay = (length<6) ? 90 : 60;
    var full_delay = each_delay * 12;

    for (var i=0; i<length; i++) {
        //console.log(printq[0] + " " + timeout);
        switch (printq.shift()) {
        case "Left":
            setTimeout(dance_left, i*full_delay, each_delay, 0);
            break;
        case "Right":
            setTimeout(dance_right, i*full_delay, each_delay, 0);
            break;
        case "Up":
            setTimeout(dance_up, i*full_delay, each_delay, 0);
            break;
        case "Down":
            setTimeout(dance_down, i*full_delay, each_delay, 0);
            break;
        }
    }
    setTimeout(dance_stand, length*full_delay);
}

function dance_stand() {
    prev_frame.style.display = "none";
    dancer_stand[stand_idx].style.display = "block";
    prev_frame = dancer_stand[stand_idx];
    stand_idx = (stand_idx + 1) % 6;
    if (printq.length == 0)
        setTimeout(dance_stand, 120);
    else
        setTimeout(dance, 120);
}

function dance_left(delay, idx) {
    prev_frame.style.display = "none";
    dancer_left[idx].style.display = "block";
    prev_frame = dancer_left[idx];

    if (idx < 11)
        setTimeout(dance_left, delay, delay, idx+1);
}

function dance_right(delay, idx) {
    prev_frame.style.display = "none";
    dancer_right[idx].style.display = "block";
    prev_frame = dancer_right[idx];

    if (idx < 11)
        setTimeout(dance_right, delay, delay, idx+1);
}

function dance_up(delay, idx) {
    prev_frame.style.display = "none";
    dancer_up[idx].style.display = "block";
    prev_frame = dancer_up[idx];

    if (idx < 11)
        setTimeout(dance_up, delay, delay, idx+1);
}

function dance_down(delay, idx) {
    prev_frame.style.display = "none";
    dancer_down[idx].style.display = "block";
    prev_frame = dancer_down[idx];

    if (idx < 11)
        setTimeout(dance_down, delay, delay, idx+1);
}