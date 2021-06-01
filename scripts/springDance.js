const emotions = [ "default", "blink_0", "blink_1", "wink", "chu" ];

const NPCs_coord = [
    { top: 630, left: 200 }, 
    { top: 630, left: 1270 },
    { top: 190, left: 1100 }
];
const NPCs_info = [
    [
        {
            origin: { x: 81, y: 139 },
            length: 12,
            delay: 90
        },
        {
            origin: { x: 83, y: 132 },
            length: 10,
            delay: 90
        }
    ],
    [
        {
            origin: { x: 71, y: 113 },
            length: 8,
            delay: 90
        },
        {
            origin: { x: 61, y: 106 },
            length: 7,
            delay: 90
        }
    ],
    [
        {
            origin: { x: 82, y: 130 },
            length: 16,
            delay: 180
        },
        {
            origin: { x: 82, y: 130 },
            length: 6,
            delay: 150
        }
    ]
]

const cheer_coord = [
    { top: 620, left: 440 }, 
    { top: 620, left: 1040 } 
];
const cheer_head_info = [
    {
        size: { w: 60, h: 45 },
        origin: { x: 28, y: 39 },
    },
    {
        size: { w: 56, h: 42 },
        origin: { x: 27, y: 39 }
    }
];
const cheer_body_info = [
    // [0]: stand
    [
        {
            size: { w: 25, h: 30 },
            origin: { x: 12, y: 30 },
            neck: { x: 3, y: -32 }
        },
        {
            size: { w: 25, h: 29 },
            origin: { x: 12, y: 29 },
            neck: { x: 4, y: -31 }
        },
        {
            size: { w: 25, h: 30 },
            origin: { x: 12, y: 30 },
            neck: { x: 4, y: -30 }
        },
        {
            size: { w: 25, h: 29 },
            origin: { x: 12, y: 29 },
            neck: { x: 4, y: -31 }
        }
    ],
    // [1]: left
    [
        {
            size: { w: 25, h: 29 },
            origin: { x: 12, y: 29 },
            neck: { x: 4, y: -32 }
        },
        {
            size: { w: 51, h: 34 },
            origin: { x: 31, y: 36 },
            neck: { x: -5, y: -35 }
        },
        {
            size: { w: 58, h: 35 },
            origin: { x: 36, y: 35 },
            neck: { x: -6, y: -31 }
        },
        {
            size: { w: 36, h: 28 },
            origin: { x: 29, y: 28 },
            neck: { x: -9, y: -29 }
        },
        {
            size: { w: 41, h: 32 },
            origin: { x: 38, y: 32 },
            neck: { x: -14, y: -30 }
        },
        {
            size: { w: 45, h: 33 },
            origin: { x: 41, y: 33 },
            neck: { x: -21, y: -31 }
        },
        {
            size: { w: 44, h: 32 },
            origin: { x: 40, y: 32 },
            neck: { x: -17, y: -31 }
        },
        {
            size: { w: 38, h: 29 },
            origin: { x: 30, y: 29 },
            neck: { x: -8, y: -30 }
        },
        {
            size: { w: 53, h: 31 },
            origin: { x: 30, y: 33 },
            neck: { x: -3, y: -35 }
        },
        {
            size: { w: 58, h: 33 },
            origin: { x: 31, y: 34 },
            neck: { x: -2, y: -34 }
        },
        {
            size: { w: 36, h: 28 },
            origin: { x: 21, y: 28 },
            neck: { x: -2, y: -29 }
        },
        {
            size: { w: 27, h: 28 },
            origin: { x: 15, y: 28 },
            neck: { x: 1, y: -29 }
        }
    ],
    // [2]: right
    [
        {
            size: { w: 38, h: 36 },
            origin: { x: 18, y: 36 },
            neck: { x: 4, y: -31 }
        },
        {
            size: { w: 38, h: 29 },
            origin: { x: 18, y: 29 },
            neck: { x: 4, y: -30 }
        },
        {
            size: { w: 48, h: 35 },
            origin: { x: 7, y: 35 },
            neck: { x: 12, y: -32 }
        },
        {
            size: { w: 50, h: 37 },
            origin: { x: 6, y: 37 },
            neck: { x: 13, y: -32 }
        },
        {
            size: { w: 48, h: 31 },
            origin: { x: 4, y: 31 },
            neck: { x: 15, y: -31 }
        },
        {
            size: { w: 38, h: 39 },
            origin: { x: 2, y: 39 },
            neck: { x: 20, y: -32 }
        },
        {
            size: { w: 38, h: 36 },
            origin: { x: 2, y: 36 },
            neck: { x: 20, y: -31 }
        },
        {
            size: { w: 38, h: 29 },
            origin: { x: 2, y: 29 },
            neck: { x: 20, y: -30 }
        },
        {
            size: { w: 44, h: 35 },
            origin: { x: 10, y: 35 },
            neck: { x: 9, y: -32 }
        },
        {
            size: { w: 46, h: 37 },
            origin: { x: 12, y: 37 },
            neck: { x: 7, y: -32 }
        },
        {
            size: { w: 46, h: 34 },
            origin: { x: 13, y: 34 },
            neck: { x: 6, y: -31 }
        },
        {
            size: { w: 38, h: 39 },
            origin: { x: 18, y: 39 },
            neck: { x: 4, y: -32 }
        }
    ],
    // [3]: up
    [
        {
            size: { w: 49, h: 31 },
            origin: { x: 18, y: 32 },
            neck: { x: 8, y: -34 }
        },
        {
            size: { w: 49, h: 41 },
            origin: { x: 20, y: 41 },
            neck: { x: 6, y: -31 }
        },
        {
            size: { w: 51, h: 36 },
            origin: { x: 23, y: 36 },
            neck: { x: 5, y: -31 }
        },
        {
            size: { w: 46, h: 34 },
            origin: { x: 28, y: 35 },
            neck: { x: -3, y: -35 }
        },
        {
            size: { w: 49, h: 43 },
            origin: { x: 33, y: 43 },
            neck: { x: -5, y: -31 }
        },
        {
            size: { w: 49, h: 40 },
            origin: { x: 35, y: 40 },
            neck: { x: -7, y: -31 }
        },
        {
            size: { w: 49, h: 31 },
            origin: { x: 29, y: 32 },
            neck: { x: -2, y: -34 }
        },
        {
            size: { w: 49, h: 41 },
            origin: { x: 27, y: 41 },
            neck: { x: 1, y: -31 }
        },
        {
            size: { w: 51, h: 36 },
            origin: { x: 26, y: 36 },
            neck: { x: 2, y: -31 }
        },
        {
            size: { w: 46, h: 34 },
            origin: { x: 16, y: 35 },
            neck: { x: 10, y: -35 }
        },
        {
            size: { w: 49, h: 43 },
            origin: { x: 14, y: 43 },
            neck: { x: 12, y: -31 }
        },
        {
            size: { w: 49, h: 40 },
            origin: { x: 12, y: 40 },
            neck: { x: 14, y: -31 }
        }
    ],
    // [4]: down
    [
        {
            size: { w: 48, h: 29 },
            origin: { x: 20, y: 29 },
            neck: { x: 4, y: -31 }
        },
        {
            size: { w: 30, h: 32 },
            origin: { x: 20, y: 32 },
            neck: { x: -1, y: -34 }
        },
        {
            size: { w: 27, h: 32 },
            origin: { x: 20, y: 33 },
            neck: { x: -3, y: -35 }
        },
        {
            size: { w: 43, h: 32 },
            origin: { x: 28, y: 32 },
            neck: { x: -7, y: -34 }
        },
        {
            size: { w: 45, h: 31 },
            origin: { x: 30, y: 31 },
            neck: { x: -8, y: -33 }
        },
        {
            size: { w: 48, h: 29 },
            origin: { x: 35, y: 29 },
            neck: { x: -11, y: -31 }
        },
        {
            size: { w: 46, h: 30 },
            origin: { x: 34, y: 30 },
            neck: { x: -10, y: -32 }
        },
        {
            size: { w: 30, h: 32 },
            origin: { x: 20, y: 32 },
            neck: { x: -4, y: -34 }
        },
        {
            size: { w: 27, h: 32 },
            origin: { x: 17, y: 33 },
            neck: { x: -2, y: -35 }
        },
        {
            size: { w: 43, h: 32 },
            origin: { x: 25, y: 32 },
            neck: { x: 2, y: -34 }
        },
        {
            size: { w: 45, h: 31 },
            origin: { x: 25, y: 31 },
            neck: { x: 3, y: -33 }
        },
        {
            size: { w: 46, h: 30 },
            origin: { x: 21, y: 30 },
            neck: { x: 6, y: -32 }
        }
    ]
    
];

const cheer_animation = [
    // right
    { action: 2, index: 0, emotion: "default" },
    { action: 2, index: 1, emotion: "default" },
    { action: 2, index: 2, emotion: "default" },
    { action: 2, index: 3, emotion: "default" },
    { action: 2, index: 4, emotion: "default" },
    { action: 2, index: 5, emotion: "default" },
    { action: 2, index: 6, emotion: "default" },
    { action: 2, index: 7, emotion: "blink_0" },
    { action: 2, index: 8, emotion: "blink_1" },
    { action: 2, index: 9, emotion: "default" },
    { action: 2, index: 10, emotion: "default" },
    { action: 2, index: 11, emotion: "default" },
    // right
    { action: 2, index: 0, emotion: "default" },
    { action: 2, index: 1, emotion: "default" },
    { action: 2, index: 2, emotion: "default" },
    { action: 2, index: 3, emotion: "default" },
    { action: 2, index: 4, emotion: "default" },
    { action: 2, index: 5, emotion: "default" },
    { action: 2, index: 6, emotion: "default" },
    { action: 2, index: 7, emotion: "wink" },
    { action: 2, index: 8, emotion: "wink" },
    { action: 2, index: 9, emotion: "wink" },
    { action: 2, index: 10, emotion: "wink" },
    { action: 2, index: 11, emotion: "wink" },
    // left
    { action: 1, index: 0, emotion: "default" },
    { action: 1, index: 1, emotion: "default" },
    { action: 1, index: 2, emotion: "default" },
    { action: 1, index: 3, emotion: "default" },
    { action: 1, index: 4, emotion: "default" },
    { action: 1, index: 5, emotion: "default" },
    { action: 1, index: 6, emotion: "default" },
    { action: 1, index: 7, emotion: "default" },
    { action: 1, index: 8, emotion: "default" },
    { action: 1, index: 9, emotion: "default" },
    { action: 1, index: 10, emotion: "default" },
    { action: 1, index: 11, emotion: "default" },
    // down
    { action: 4, index: 0, emotion: "default" },
    { action: 4, index: 1, emotion: "default" },
    { action: 4, index: 2, emotion: "default" },
    { action: 4, index: 3, emotion: "default" },
    { action: 4, index: 4, emotion: "blink_0" },
    { action: 4, index: 5, emotion: "blink_1" },
    { action: 4, index: 6, emotion: "default" },
    { action: 4, index: 7, emotion: "default" },
    { action: 4, index: 8, emotion: "default" },
    { action: 4, index: 9, emotion: "default" },
    { action: 4, index: 10, emotion: "default" },
    { action: 4, index: 11, emotion: "default" },
    // up
    { action: 3, index: 0, emotion: "chu" },
    { action: 3, index: 1, emotion: "chu" },
    { action: 3, index: 2, emotion: "chu" },
    { action: 3, index: 3, emotion: "chu" },
    { action: 3, index: 4, emotion: "chu" },
    { action: 3, index: 5, emotion: "chu" },
    { action: 3, index: 6, emotion: "chu" },
    { action: 3, index: 7, emotion: "chu" },
    { action: 3, index: 8, emotion: "chu" },
    { action: 3, index: 9, emotion: "chu" },
    { action: 3, index: 10, emotion: "chu" },
    { action: 3, index: 11, emotion: "chu" },
    // left
    { action: 1, index: 0, emotion: "default" },
    { action: 1, index: 1, emotion: "default" },
    { action: 1, index: 2, emotion: "default" },
    { action: 1, index: 3, emotion: "default" },
    { action: 1, index: 4, emotion: "blink_0" },
    { action: 1, index: 5, emotion: "blink_1" },
    { action: 1, index: 6, emotion: "default" },
    { action: 1, index: 7, emotion: "default" },
    { action: 1, index: 8, emotion: "default" },
    { action: 1, index: 9, emotion: "default" },
    { action: 1, index: 10, emotion: "default" },
    { action: 1, index: 11, emotion: "default" },
    // down
    { action: 4, index: 0, emotion: "default" },
    { action: 4, index: 1, emotion: "default" },
    { action: 4, index: 2, emotion: "default" },
    { action: 4, index: 3, emotion: "default" },
    { action: 4, index: 4, emotion: "default" },
    { action: 4, index: 5, emotion: "default" },
    { action: 4, index: 6, emotion: "default" },
    { action: 4, index: 7, emotion: "default" },
    { action: 4, index: 8, emotion: "default" },
    { action: 4, index: 9, emotion: "default" },
    { action: 4, index: 10, emotion: "default" },
    { action: 4, index: 11, emotion: "default" },
    // down
    { action: 4, index: 0, emotion: "default" },
    { action: 4, index: 1, emotion: "default" },
    { action: 4, index: 2, emotion: "default" },
    { action: 4, index: 3, emotion: "default" },
    { action: 4, index: 4, emotion: "default" },
    { action: 4, index: 5, emotion: "default" },
    { action: 4, index: 6, emotion: "default" },
    { action: 4, index: 7, emotion: "default" },
    { action: 4, index: 8, emotion: "default" },
    { action: 4, index: 9, emotion: "default" },
    { action: 4, index: 10, emotion: "default" },
    { action: 4, index: 11, emotion: "default" },
    // right (first half) 
    { action: 2, index: 0, emotion: "default" },
    { action: 2, index: 1, emotion: "default" },
    { action: 2, index: 2, emotion: "default" },
    { action: 2, index: 3, emotion: "default" },
    { action: 2, index: 4, emotion: "default" },
    { action: 2, index: 5, emotion: "default" },
    // right
    { action: 2, index: 0, emotion: "blink_0", offset: 16 },
    { action: 2, index: 1, emotion: "blink_1" },
    { action: 2, index: 2, emotion: "default" },
    { action: 2, index: 3, emotion: "default" },
    { action: 2, index: 4, emotion: "default" },
    { action: 2, index: 5, emotion: "default" },
    // down
    { action: 4, index: 0, emotion: "default", offset: 16 },
    { action: 4, index: 1, emotion: "default" },
    { action: 4, index: 2, emotion: "default" },
    { action: 4, index: 3, emotion: "default" },
    { action: 4, index: 4, emotion: "default" },
    { action: 4, index: 5, emotion: "default" },
    { action: 4, index: 6, emotion: "default" },
    { action: 4, index: 7, emotion: "default" },
    { action: 4, index: 8, emotion: "default" },
    { action: 4, index: 9, emotion: "default" },
    { action: 4, index: 10, emotion: "default" },
    { action: 4, index: 11, emotion: "default" },
    // up
    { action: 3, index: 0, emotion: "chu" },
    { action: 3, index: 1, emotion: "chu" },
    { action: 3, index: 2, emotion: "chu" },
    { action: 3, index: 3, emotion: "chu" },
    { action: 3, index: 4, emotion: "chu" },
    { action: 3, index: 5, emotion: "chu" },
    { action: 3, index: 6, emotion: "chu" },
    { action: 3, index: 7, emotion: "chu" },
    { action: 3, index: 8, emotion: "chu" },
    { action: 3, index: 9, emotion: "chu" },
    { action: 3, index: 10, emotion: "chu" },
    { action: 3, index: 11, emotion: "chu" },
    // right
    { action: 2, index: 0, emotion: "default" },
    { action: 2, index: 1, emotion: "default" },
    { action: 2, index: 2, emotion: "default" },
    { action: 2, index: 3, emotion: "default" },
    { action: 2, index: 4, emotion: "default" },
    { action: 2, index: 5, emotion: "default" },
    { action: 2, index: 6, emotion: "wink" },
    { action: 2, index: 7, emotion: "wink" },
    { action: 2, index: 8, emotion: "wink" },
    { action: 2, index: 9, emotion: "wink" },
    { action: 2, index: 10, emotion: "wink" },
    { action: 2, index: 11, emotion: "wink" },
    // left
    { action: 1, index: 0, emotion: "default" },
    { action: 1, index: 1, emotion: "default" },
    { action: 1, index: 2, emotion: "default" },
    { action: 1, index: 3, emotion: "default" },
    { action: 1, index: 4, emotion: "default" },
    { action: 1, index: 5, emotion: "default" },
    { action: 1, index: 6, emotion: "default" },
    { action: 1, index: 7, emotion: "default" },
    { action: 1, index: 8, emotion: "default" },
    { action: 1, index: 9, emotion: "default" },
    { action: 1, index: 10, emotion: "default" },
    { action: 1, index: 11, emotion: "default" },
    // down
    { action: 4, index: 0, emotion: "default" },
    { action: 4, index: 1, emotion: "default" },
    { action: 4, index: 2, emotion: "default" },
    { action: 4, index: 3, emotion: "default" },
    { action: 4, index: 4, emotion: "default" },
    { action: 4, index: 5, emotion: "default" },
    { action: 4, index: 6, emotion: "default" },
    { action: 4, index: 7, emotion: "default" },
    { action: 4, index: 8, emotion: "default" },
    { action: 4, index: 9, emotion: "default" },
    { action: 4, index: 10, emotion: "default" },
    { action: 4, index: 11, emotion: "default" },
    // down
    { action: 4, index: 0, emotion: "default" },
    { action: 4, index: 1, emotion: "default" },
    { action: 4, index: 2, emotion: "default" },
    { action: 4, index: 3, emotion: "default" },
    { action: 4, index: 4, emotion: "blink_0" },
    { action: 4, index: 5, emotion: "blink_1" },
    { action: 4, index: 6, emotion: "default" },
    { action: 4, index: 7, emotion: "default" },
    { action: 4, index: 8, emotion: "default" },
    { action: 4, index: 9, emotion: "default" },
    { action: 4, index: 10, emotion: "default" },
    { action: 4, index: 11, emotion: "default" },
    // left
    { action: 1, index: 0, emotion: "default" },
    { action: 1, index: 1, emotion: "default" },
    { action: 1, index: 2, emotion: "default" },
    { action: 1, index: 3, emotion: "default" },
    { action: 1, index: 4, emotion: "default" },
    { action: 1, index: 5, emotion: "default" },
    { action: 1, index: 6, emotion: "default" },
    { action: 1, index: 7, emotion: "default" },
    { action: 1, index: 8, emotion: "default" },
    { action: 1, index: 9, emotion: "default" },
    { action: 1, index: 10, emotion: "default" },
    { action: 1, index: 11, emotion: "default" },
    // right (last half)
    { action: 2, index: 6, emotion: "default", offset: -16 },
    { action: 2, index: 7, emotion: "default" },
    { action: 2, index: 8, emotion: "default" },
    { action: 2, index: 9, emotion: "default" },
    { action: 2, index: 10, emotion: "default" },
    { action: 2, index: 11, emotion: "default" },
    // right (last half)
    { action: 2, index: 6, emotion: "default", offset: -16 },
    { action: 2, index: 7, emotion: "default" },
    { action: 2, index: 8, emotion: "default" },
    { action: 2, index: 9, emotion: "default" },
    { action: 2, index: 10, emotion: "default" },
    { action: 2, index: 11, emotion: "default" },
    // up
    { action: 3, index: 0, emotion: "chu" },
    { action: 3, index: 1, emotion: "chu" },
    { action: 3, index: 2, emotion: "chu" },
    { action: 3, index: 3, emotion: "chu" },
    { action: 3, index: 4, emotion: "chu" },
    { action: 3, index: 5, emotion: "chu" },
    { action: 3, index: 6, emotion: "chu" },
    { action: 3, index: 7, emotion: "chu" },
    { action: 3, index: 8, emotion: "chu" },
    { action: 3, index: 9, emotion: "chu" },
    { action: 3, index: 10, emotion: "chu" },
    { action: 3, index: 11, emotion: "chu" }
];