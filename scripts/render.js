const dancer_ani = new Array(5);
const cheer_head_ani = new Array(2);
const cheer_body_ani = [ new Array(5), new Array(5) ];
const npc_ani = [ new Array(2), new Array(2), new Array(2) ];
var prev_frame = {
    dancer: undefined,
    cheer_head: new Array(2),
    cheer_body: new Array(2),
    npcs: new Array(3)
};
var stand_idx = 0;
var npcs_id = [ 0, 0, 0 ];
var npcs_idx = [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ];
var cheer_id = 0;
var cheer_idx = 0;

$(document).ready(function() {
    const objects = document.getElementById("objects");
    const mainNPC = document.createElement("img");
    const NPCs = [ document.createElement("div"), document.createElement("div"), document.createElement("div") ];
    const cheerleader = [ document.createElement("div"), document.createElement("div") ];
    const dancer = document.createElement("div");

    // mainNPC container
    mainNPC.id = "mainNPC";
    mainNPC.style.position = "absolute";
    mainNPC.style.top = "262px";
    mainNPC.style.left = "1169px";
    mainNPC.src = "images/9062540.gif";
    objects.appendChild(mainNPC);

    // NPCs container
    for (var i=0; i<3; i++) {
        NPCs[i].id = "NPC_" + i;
        NPCs[i].style.position = "absolute";
        NPCs[i].style.top = NPCs_coord[i].top;
        NPCs[i].style.left = NPCs_coord[i].left;
        objects.appendChild(NPCs[i]);
    }

    // Cheerleaders container
    for (var i=0; i<2; i++) {
        cheerleader[i].id = "cheerleader_" + i;
        cheerleader[i].style.position = "absolute";
        cheerleader[i].style.top = cheer_coord[i].top;
        cheerleader[i].style.left = cheer_coord[i].left;
        objects.appendChild(cheerleader[i]);
    }

    // Dancer container
    dancer.id = "dancer";
    dancer.style.position = "absolute";
    dancer.style.top = "390px";
    dancer.style.left = "545px";
    objects.appendChild(dancer);

    // bring NPCs image
    for (var i=0; i<3; i++) {
        for (var j=0; j<2; j++) {
            npc_ani[i][j] = new Array();
            for (var k=0; k<NPCs_info[i][j].length; k++) {
                npc_ani[i][j].push(document.createElement("img"));
                npc_ani[i][j][k].src = "images/NPCs/NPC_"+i+"_"+j+".frames/"+String(k*NPCs_info[i][j].delay)+".png";
                npc_ani[i][j][k].style.display = "none";
                npc_ani[i][j][k].style.position = "absolute";
                npc_ani[i][j][k].style.left = -NPCs_info[i][j].origin.x;
                npc_ani[i][j][k].style.top = -NPCs_info[i][j].origin.y;
                NPCs[i].appendChild(npc_ani[i][j][k]);
            }
        }
    }
    // bring Head image
    for (var i=0; i<2; i++) {
        cheer_head_ani[i] = new Object();
        for (var emo of emotions) {
            cheer_head_ani[i][emo] = document.createElement("img");
            cheer_head_ani[i][emo].src = "images/Cheerleaders/head_"+i+"/"+emo+".png";
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
            cheer_body_ani[0][i][j].src = "images/Cheerleaders/body_0_"+i+".frames/"+String(j*cheer_delay)+".png";
            cheer_body_ani[0][i][j].style.display = "none";
            cheer_body_ani[0][i][j].style.position = "absolute";
            cheer_body_ani[0][i][j].style.left = cheer_body_info[i][j].origin.x - cheer_body_info[i][j].size.w;
            cheer_body_ani[0][i][j].style.top = -cheer_body_info[i][j].origin.y;
            cheerleader[0].appendChild(cheer_body_ani[0][i][j]);

            cheer_body_ani[1][i].push(document.createElement("img"));
            cheer_body_ani[1][i][j].src = "images/Cheerleaders/body_1_"+i+".frames/"+String(j*cheer_delay)+".png";
            cheer_body_ani[1][i][j].style.display = "none";
            cheer_body_ani[1][i][j].style.position = "absolute";
            cheer_body_ani[1][i][j].style.left = -cheer_body_info[i][j].origin.x;
            cheer_body_ani[1][i][j].style.top = -cheer_body_info[i][j].origin.y;
            cheerleader[1].appendChild(cheer_body_ani[1][i][j]);
        }
        for (var j=0; j<dance_len; j++) {
            dancer_ani[i].push(document.createElement("img"));
            dancer_ani[i][j].src = "images/9062538.img/9062538.img."+i+".frames/"+String(j*dancer_delay)+".png";
            dancer_ani[i][j].style.display = "none";
            dancer.appendChild(dancer_ani[i][j]);
        }
    }

    // initializing first scene
    dancer_ani[0][0].style.display = "block";
    cheer_head_ani[0]["default"].style.display = "block";
    cheer_head_ani[1]["default"].style.display = "block";
    cheer_body_ani[0][0][0].style.display = "block";
    cheer_body_ani[1][0][0].style.display = "block";
    npc_ani[0][0][0].style.display = "block";
    npc_ani[1][0][0].style.display = "block";
    npc_ani[2][0][0].style.display = "block";
    prev_frame['dancer'] = dancer_ani[0][0];
    prev_frame['cheer_head'][0] = cheer_head_ani[0]["default"]
    prev_frame['cheer_head'][1] = cheer_head_ani[1]["default"]
    prev_frame['cheer_body'][0] = cheer_body_ani[0][0][0];
    prev_frame['cheer_body'][1] = cheer_body_ani[1][0][0];
    prev_frame['npcs'][0] = npc_ani[0][0][0];
    prev_frame['npcs'][1] = npc_ani[1][0][0];
    prev_frame['npcs'][2] = npc_ani[2][0][0];

    // start animation
    npcs_id[0] = setInterval(NPC_dance, 90);
    cheer_id = setInterval(cheerleading, 90);
    dance_stand();
});

var skip = 0;
function NPC_dance() {
    for (var i=0; i<3-skip; i++) {
        prev_frame['npcs'][i].style.display = "none";
        npc_ani[i][0][npcs_idx[i][0]].style.display = "block";
        prev_frame['npcs'][i] = npc_ani[i][0][npcs_idx[i][0]];
        npcs_idx[i][0] = (npcs_idx[i][0] + 1) % NPCs_info[i][0].length;
    }
    skip = !skip;
}

function NPC_fever1() {
    for (var i=0; i<2; i++) {
        prev_frame['npcs'][i].style.display = "none";
        npc_ani[i][1][npcs_idx[i][1]].style.display = "block";
        prev_frame['npcs'][i] = npc_ani[i][1][npcs_idx[i][1]];
        npcs_idx[i][1] = (npcs_idx[i][1] + 1) % NPCs_info[i][1].length;
    }
}

function NPC_fever2() {
    prev_frame['npcs'][2].style.display = "none";
    npc_ani[2][1][npcs_idx[2][1]].style.display = "block";
    prev_frame['npcs'][2] = npc_ani[2][1][npcs_idx[2][1]];
    npcs_idx[2][1] = (npcs_idx[2][1] + 1) % NPCs_info[2][1].length;
}

function cheerleading() {
    var act = cheer_animation[cheer_idx].action;
    var idx = cheer_animation[cheer_idx].index;
    var emo = cheer_animation[cheer_idx].emotion;
    
    prev_frame['cheer_head'][0].style.display = "none";
    prev_frame['cheer_head'][1].style.display = "none";
    prev_frame['cheer_body'][0].style.display = "none";
    prev_frame['cheer_body'][1].style.display = "none";
    if ("offset" in cheer_animation[cheer_idx]) {
        var cheerleader = [ document.getElementById("cheerleader_0"), document.getElementById("cheerleader_1") ];
        var origin = [ Number(cheerleader[0].style.left.slice(0, -2)), Number(cheerleader[1].style.left.slice(0, -2)) ];

        cheerleader[0].style.left = origin[0] - cheer_animation[cheer_idx].offset;
        cheerleader[1].style.left = origin[1] + cheer_animation[cheer_idx].offset;
    }
    cheer_head_ani[0][emo].style.left = -cheer_body_info[act][idx].neck.x + cheer_head_info[0].origin.x - cheer_head_info[0].size.w;
    cheer_head_ani[0][emo].style.top = cheer_body_info[act][idx].neck.y - cheer_head_info[0].origin.y;
    cheer_head_ani[0][emo].style.display = "block";
    cheer_head_ani[1][emo].style.left = cheer_body_info[act][idx].neck.x - cheer_head_info[1].origin.x;
    cheer_head_ani[1][emo].style.top = cheer_body_info[act][idx].neck.y - cheer_head_info[1].origin.y;
    cheer_head_ani[1][emo].style.display = "block";
    cheer_body_ani[0][act][idx].style.display = "block";
    cheer_body_ani[1][act][idx].style.display = "block";
    prev_frame['cheer_head'][0] = cheer_head_ani[0][emo];
    prev_frame['cheer_head'][1] = cheer_head_ani[1][emo];
    prev_frame['cheer_body'][0] = cheer_body_ani[0][act][idx];
    prev_frame['cheer_body'][1] = cheer_body_ani[1][act][idx];

    cheer_idx = (cheer_idx + 1) % cheer_animation.length;
}

function dance_command() {
    console.log("entry");
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

    clearInterval(npcs_id[0]);
    npcs_id[1] = setInterval(NPC_fever1, 90);
    npcs_id[2] = setInterval(NPC_fever2, 150);
    setTimeout(() => {
        clearInterval(npcs_id[1]);
        clearInterval(npcs_id[2]);
        npcs_id[0] = setInterval(NPC_dance, 90);
    }, length*full_delay);
}

function dance_stand() {
    prev_frame['dancer'].style.display = "none";
    dancer_ani[0][stand_idx].style.display = "block";
    prev_frame['dancer'] = dancer_ani[0][stand_idx];
    stand_idx = (stand_idx + 1) % 6;
    if (printq.length == 0)
        setTimeout(dance_stand, 120);
    else
        dance_command();
}

function dance(delay, dir, idx) {
    prev_frame['dancer'].style.display = "none";
    dancer_ani[dir][idx].style.display = "block";
    prev_frame['dancer'] = dancer_ani[dir][idx];

    if (idx < 11)
        setTimeout(dance, delay, delay, dir, idx+1);
}