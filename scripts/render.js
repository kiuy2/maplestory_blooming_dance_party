const dancer_ani = new Array(5);
const cheer_head_ani = new Array(2);
const cheer_body_ani = [ new Array(5), new Array(5) ];
var prev_frame = new Array(3);
var stand_idx = 0;
var cheer_id = 0;
var cheer_idx = 0;

$(document).ready(function() {
    const objects = document.getElementById("objects");
    const NPC = document.createElement("img");
    const cheerleader = [];
    const dancer = document.createElement("div");

    // NPC
    NPC.id = "NPC_0";
    NPC.style.position = "absolute";
    NPC.style.top = "262px";
    NPC.style.left = "1169px";
    NPC.src = "images/9062540.gif";
    objects.appendChild(NPC);

    // cheerleaders
    cheerleader.push(document.createElement("div"));
    cheerleader[0].id = "cheerleader_0";
    cheerleader[0].style.position = "absolute";
    cheerleader[0].style.top = "620px";
    cheerleader[0].style.left = "440px";
    objects.appendChild(cheerleader[0]);
    cheerleader.push(document.createElement("div"));
    cheerleader[1].id = "cheerleader_1";
    cheerleader[1].style.position = "absolute";
    cheerleader[1].style.top = "620px";
    cheerleader[1].style.left = "1040px";
    objects.appendChild(cheerleader[1]);
    dancer
    dancer.id = "dancer";
    dancer.style.position = "absolute";
    dancer.style.top = "390px";
    dancer.style.left = "545px";
    objects.appendChild(dancer);

    // cheer head

    // cheer (head, stand)
    cheer_body_ani[0][0] = new Array();
    cheer_body_ani[1][0] = new Array();
    for (var i=0; i<2; i++) {
        cheer_head_ani[i] = new Object();
        for (var j=0; j<5; j++) {
            cheer_head_ani[i][emotions[j]] = document.createElement("img");
            cheer_head_ani[i][emotions[j]].src = "images/springDance/head_"+i+"/"+emotions[j]+".png";
            cheer_head_ani[i][emotions[j]].style.display = "none";
            cheer_head_ani[i][emotions[j]].style.position = "absolute";
            cheerleader[i].appendChild(cheer_head_ani[i][emotions[j]]);
        }

        cheer_body_ani[i][0] = new Array();
        for (var j=0; j<4; j++) {
            cheer_body_ani[i][0].push(document.createElement("img"));
            cheer_body_ani[i][0][j].src = "images/springDance/body_"+i+"_0.frames/"+String(j*180)+".png";
            cheer_body_ani[i][0][j].style.display = "none";
            cheer_body_ani[i][0][j].style.position = "absolute";
            cheer_body_ani[i][0][j].style.left = -cheer_body[i][0][j].origin.x;
            cheer_body_ani[i][0][j].style.top = -cheer_body[i][0][j].origin.y;
            cheerleader[i].appendChild(cheer_body_ani[i][0][j]);
        }
    }
    // dance (stand)
    dancer_ani[0] = new Array();
    for (var i=0; i<6; i++) {
        dancer_ani[0].push(document.createElement("img"));
        dancer_ani[0][i].src = "images/9062538.img/9062538.img.0.frames/"+String(i*120)+".png";
        dancer_ani[0][i].style.display = "none";
        dancer.appendChild(dancer_ani[0][i]);
    }
    // dance (left, right, up, down)
    for (var i=1; i<5; i++) {
        dancer_ani[i] = new Array();
        for (var j=0; j<12; j++) {
            dancer_ani[i].push(document.createElement("img"));
            dancer_ani[i][j].src = "images/9062538.img/9062538.img."+i+".frames/"+String(j*90)+".png";
            dancer_ani[i][j].style.display = "none";
            dancer.appendChild(dancer_ani[i][j]);
        }
    }

    dancer_ani[0][0].style.display = "block";
    cheer_head_ani[0]["default"].style.display = "block";
    cheer_head_ani[1]["default"].style.display = "block";
    cheer_body_ani[0][0][0].style.display = "block";
    cheer_body_ani[1][0][0].style.display = "block";
    prev_frame[0] = dancer_ani[0][0];
    prev_frame[1] = cheer_head_ani[0]["default"]
    prev_frame[2] = cheer_head_ani[1]["default"]
    prev_frame[3] = cheer_body_ani[0][0][0];
    prev_frame[4] = cheer_body_ani[1][0][0];
    cheer_id = setInterval(cheer_stand, 180);
    dance_stand();
});

function dance_command() {
    prev_frame[0].style.display = "none";
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

function cheer_stand() {
    var emo = 'default';
    for (var i=1; i<5; i++) prev_frame[i].style.display = "none";
    cheer_head_ani[0][emo].style.left = cheer_body[0][0][cheer_idx].neck.x - cheer_head[0].x;
    cheer_head_ani[0][emo].style.top = cheer_body[0][0][cheer_idx].neck.y - cheer_head[0].y;
    cheer_head_ani[0][emo].style.display = "block";
    cheer_head_ani[1][emo].style.left = cheer_body[1][0][cheer_idx].neck.x - cheer_head[1].x;
    cheer_head_ani[1][emo].style.top = cheer_body[1][0][cheer_idx].neck.y - cheer_head[1].y;
    cheer_head_ani[1][emo].style.display = "block";
    cheer_body_ani[0][0][cheer_idx].style.display = "block";
    cheer_body_ani[1][0][cheer_idx].style.display = "block";
    prev_frame[1] = cheer_head_ani[0][emo];
    prev_frame[2] = cheer_head_ani[1][emo];
    prev_frame[3] = cheer_body_ani[0][0][cheer_idx];
    prev_frame[4] = cheer_body_ani[1][0][cheer_idx];
    cheer_idx = (cheer_idx + 1) % 4;
}

function dance_stand() {
    prev_frame[0].style.display = "none";
    dancer_ani[0][stand_idx].style.display = "block";
    prev_frame[0] = dancer_ani[0][stand_idx];
    stand_idx = (stand_idx + 1) % 6;
    if (printq.length == 0)
        setTimeout(dance_stand, 120);
    else
        setTimeout(dance_command, 120);
}

function dance(delay, dir, idx) {
    prev_frame[0].style.display = "none";
    dancer_ani[dir][idx].style.display = "block";
    prev_frame[0] = dancer_ani[dir][idx];

    if (idx < 11)
        setTimeout(dance, delay, delay, dir, idx+1);
}