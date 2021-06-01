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
    const cheerleader = [ document.createElement("div"), document.createElement("div") ];
    const dancer = document.createElement("div");

    // NPC container
    NPC.id = "NPC_0";
    NPC.style.position = "absolute";
    NPC.style.top = "262px";
    NPC.style.left = "1169px";
    NPC.src = "images/9062540.gif";
    objects.appendChild(NPC);

    // Cheerleaders and Dancer container
    cheerleader[0].id = "cheerleader_0";
    cheerleader[0].style.position = "absolute";
    cheerleader[0].style.top = "620px";
    cheerleader[0].style.left = "440px";
    objects.appendChild(cheerleader[0]);
    cheerleader[1].id = "cheerleader_1";
    cheerleader[1].style.position = "absolute";
    cheerleader[1].style.top = "620px";
    cheerleader[1].style.left = "1040px";
    objects.appendChild(cheerleader[1]);
    dancer.id = "dancer";
    dancer.style.position = "absolute";
    dancer.style.top = "390px";
    dancer.style.left = "545px";
    objects.appendChild(dancer);

    // bring Head image
    for (var i=0; i<2; i++) {
        cheer_head_ani[i] = new Object();
        for (var emo of emotions) {
            console.log(emo);
            cheer_head_ani[i][emo] = document.createElement("img");
            cheer_head_ani[i][emo].src = "images/springDance/head_"+i+"/"+emo+".png";
            cheer_head_ani[i][emo].style.display = "none";
            cheer_head_ani[i][emo].style.position = "absolute";
            cheerleader[i].appendChild(cheer_head_ani[i][emo]);
        }
    }
    // bring Dancer, Cheerleaders image
    for (var i=0; i<5; i++) {
        var cheer_len, dance_len;
        var cheer_delay, dancer_delay;
        cheer_body_ani[0][i] = new Array();
        cheer_body_ani[1][i] = new Array();
        dancer_ani[i] = new Array();

        if (i == 0) {
            cheer_len = 4;
            cheer_delay = 180;
            dance_len = 6;
            dancer_delay = 120;
        }
        else {
            cheer_len = dance_len = 12;
            cheer_delay = dancer_delay = 90;
        }

        for (var j=0; j<cheer_len; j++) {
            cheer_body_ani[0][i].push(document.createElement("img"));
            cheer_body_ani[0][i][j].src = "images/springDance/body_0_"+i+".frames/"+String(j*cheer_delay)+".png";
            cheer_body_ani[0][i][j].style.display = "none";
            cheer_body_ani[0][i][j].style.position = "absolute";
            cheer_body_ani[0][i][j].style.left = cheer_body[i][j].origin.x - cheer_body[i][j].size.w;
            cheer_body_ani[0][i][j].style.top = -cheer_body[i][j].origin.y;
            cheerleader[0].appendChild(cheer_body_ani[0][i][j]);

            cheer_body_ani[1][i].push(document.createElement("img"));
            cheer_body_ani[1][i][j].src = "images/springDance/body_1_"+i+".frames/"+String(j*cheer_delay)+".png";
            cheer_body_ani[1][i][j].style.display = "none";
            cheer_body_ani[1][i][j].style.position = "absolute";
            cheer_body_ani[1][i][j].style.left = -cheer_body[i][j].origin.x;
            cheer_body_ani[1][i][j].style.top = -cheer_body[i][j].origin.y;
            cheerleader[1].appendChild(cheer_body_ani[1][i][j]);
        }
        for (var j=0; j<dance_len; j++) {
            dancer_ani[i].push(document.createElement("img"));
            dancer_ani[i][j].src = "images/9062538.img/9062538.img."+i+".frames/"+String(j*dancer_delay)+".png";
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
    cheer_id = setInterval(cheerleading, 90);
    dance_stand();
});

function cheerleading() {
    var act = cheer_animation[cheer_idx].action;
    var idx = cheer_animation[cheer_idx].index;
    var emo = cheer_animation[cheer_idx].emotion;
    
    for (var i=1; i<5; i++) prev_frame[i].style.display = "none";
    if ("offset" in cheer_animation[cheer_idx]) {
        var cheerleader = [ document.getElementById("cheerleader_0"), document.getElementById("cheerleader_1") ];
        var origin = [ Number(cheerleader[0].style.left.slice(0, -2)), Number(cheerleader[1].style.left.slice(0, -2)) ];

        cheerleader[0].style.left = origin[0] - cheer_animation[cheer_idx].offset;
        cheerleader[1].style.left = origin[1] + cheer_animation[cheer_idx].offset;
    }
    cheer_head_ani[0][emo].style.left = -cheer_body[act][idx].neck.x + cheer_head[0].origin.x - cheer_head[0].size.w;
    cheer_head_ani[0][emo].style.top = cheer_body[act][idx].neck.y - cheer_head[0].origin.y;
    cheer_head_ani[0][emo].style.display = "block";
    cheer_head_ani[1][emo].style.left = cheer_body[act][idx].neck.x - cheer_head[1].origin.x;
    cheer_head_ani[1][emo].style.top = cheer_body[act][idx].neck.y - cheer_head[1].origin.y;
    cheer_head_ani[1][emo].style.display = "block";
    cheer_body_ani[0][act][idx].style.display = "block";
    cheer_body_ani[1][act][idx].style.display = "block";
    prev_frame[1] = cheer_head_ani[0][emo];
    prev_frame[2] = cheer_head_ani[1][emo];
    prev_frame[3] = cheer_body_ani[0][act][idx];
    prev_frame[4] = cheer_body_ani[1][act][idx];

    cheer_idx = (cheer_idx + 1) % cheer_animation.length;
}

function dance_command() {
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
        setTimeout(dance, i*full_delay+each_delay, each_delay, dir, 0);
    }
    setTimeout(dance_stand, length*full_delay+each_delay);
}

function dance_stand() {
    prev_frame[0].style.display = "none";
    dancer_ani[0][stand_idx].style.display = "block";
    prev_frame[0] = dancer_ani[0][stand_idx];
    stand_idx = (stand_idx + 1) % 6;
    if (printq.length == 0)
        setTimeout(dance_stand, 120);
    else
        dance_command();
}

function dance(delay, dir, idx) {
    prev_frame[0].style.display = "none";
    dancer_ani[dir][idx].style.display = "block";
    prev_frame[0] = dancer_ani[dir][idx];

    if (idx < 11)
        setTimeout(dance, delay, delay, dir, idx+1);
}