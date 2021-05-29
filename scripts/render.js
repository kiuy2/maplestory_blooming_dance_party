const cheer_ani = [];
const dancer_ani = [];
var prev_frame;
var cheer_idx = 0;
var stand_idx = 0;

$(document).ready(function() {
    const objects = document.getElementById("objects");
    const NPC = document.createElement("img");
    const cheer0 = document.createElement("img");
    const cheerleader = [];
    const dancer = document.createElement("div");

    // NPC
    NPC.id = "NPC_0";
    NPC.style.position = "absolute";
    NPC.style.top = "262px";
    NPC.style.left = "1169px";
    NPC.src = "images/9062540.gif";
    objects.appendChild(NPC);
    // cheer0
    cheer0.id = "cheer_0";
    cheer0.style.position = "absolute";
    cheer0.style.top = "521px";
    cheer0.style.left = "226px";
    cheer0.src = "images/cheer0.gif";
    objects.appendChild(cheer0);
    // // cheerleaders
    // cheerleader.push(document.createElement("div"));
    // cheerleader[0].id = "cheerleader_0";
    // cheerleader[0].style.position = "absolute";
    // cheerleader[0].style.top = "530px";
    // cheerleader[0].style.left = "240px";
    // objects.appendChild(cheerleader[0]);
    // cheerleader.push(document.createElement("div"));
    // cheerleader[1].id = "cheerleader_1";
    // cheerleader[1].style.position = "absolute";
    // cheerleader[1].style.top = "530px";
    // cheerleader[1].style.left = "1040px";
    // objects.appendChild(cheerleader[1]);
    // dancer
    dancer.id = "dancer";
    dancer.style.position = "absolute";
    dancer.style.top = "390px";
    dancer.style.left = "545px";
    objects.appendChild(dancer);

    // // cheer
    // for (var i=0; i<1; i++) {
    //     cheer_ani[i] = new Array();
    //     for (var j=0; j<48; j++) {
    //         cheer_ani[i].push(document.createElement("img"));
    //         cheer_ani[i][j].src = "images/cheer"+i+"/"+j+".png";
    //         cheer_ani[i][j].style.display = "none";
    //         cheerleader[i].appendChild(cheer_ani[i][j]);
    //     }
    // }
    // dance (stand)
    dancer_ani[0] = new Array();
    for (var i=0; i<6; i++) {
        dancer_ani[0].push(document.createElement("img"));
        dancer_ani[0][i].src = "images/9062538.img.0.frames/"+String(i*120)+".png";
        dancer_ani[0][i].style.display = "none";
        dancer.appendChild(dancer_ani[0][i]);
    }
    // dance (each directions)
    for (var i=1; i<5; i++) {
        dancer_ani[i] = new Array();
        for (var j=0; j<12; j++) {
            dancer_ani[i].push(document.createElement("img"));
            dancer_ani[i][j].src = "images/9062538.img."+i+".frames/"+String(j*90)+".png";
            dancer_ani[i][j].style.display = "none";
            dancer.appendChild(dancer_ani[i][j]);
        }
    }

    //setInterval(cheerlead, 90);
    dancer_ani[0][0].style.display = "block";
    prev_frame = dancer_ani[0][0];
    dance_stand();
});

// function cheerlead() {
//     cheer_ani[0][cheer_idx].style.display = "none";
//     cheer_idx = (cheer_idx + 1) % 48;
//     cheer_ani[0][cheer_idx].style.display = "block";
// }

function dance_command() {
    prev_frame.style.display = "none";
    var dir;
    var length = printq.length;
    var each_delay = (length<6) ? 90 : 60;
    var full_delay = each_delay * 12;

    for (var i=0; i<length; i++) {
        switch (printq.shift()) {
            case "Left": dir = 1; break;
            case "Right": dir = 2; break;
            case "Up": dir = 3; break;
            case "Down": dir = 4; break;
        }
        setTimeout(dance, i*full_delay, each_delay, dir, 0);
    }
    setTimeout(dance_stand, length*full_delay);
}

function dance_stand() {
    prev_frame.style.display = "none";
    dancer_ani[0][stand_idx].style.display = "block";
    prev_frame = dancer_ani[0][stand_idx];
    stand_idx = (stand_idx + 1) % 6;
    if (printq.length == 0)
        setTimeout(dance_stand, 120);
    else
        setTimeout(dance_command, 120);
}

function dance(delay, dir, idx) {
    prev_frame.style.display = "none";
    dancer_ani[dir][idx].style.display = "block";
    prev_frame = dancer_ani[dir][idx];

    if (idx < 11)
        setTimeout(dance, delay, delay, dir, idx+1);
}