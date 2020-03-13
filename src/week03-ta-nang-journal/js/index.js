const img = $("img").toArray();
var PROGRESS = 0;
var INCREMENT = 100 / img.length;
const PAGE_REVEAL_TIME = 1000;
const DELAY_BEFORE_PAGE_REVEAL = 1000;
const GAP = 300;
const TIME_TO_SHOW_IMAGE = 1500;

const ARRAY_POST = [
    {
        title: "Đi lạc lần thứ 1",
        description:
            "Vừa mới đặt chân tới Tà Năng cả nhóm đã bị lạc. Nguyên nhân bị lạc là vì libero ngu. Sau một hồi lạc trong rừng 30 phút thì cũng tìm được cách đi ra. không hiểu sao lại có một thằng ngu như vậy trong đoàn..."
    },
    {
        title: "Hết đi lạc rồi",
        description: "Tìm được đường về rồi vui qúa ba má ơi."
    }
];

// @read https://stackoverflow.com/questions/3877027/jquery-callback-on-image-load-even-when-the-image-is-cached
// select het tat ca hinh

function handleLoad() {
    $("img")
        .one("load", function() {
            // do stuff
            // neu load xong thi cap nhat tien do
            updateProgress();
            console.log(this);

            // cap nhat animation
            if (PROGRESS > 99) {
                console.log("load xong");
                setTimeout(() => startReveal(), DELAY_BEFORE_PAGE_REVEAL);
                //
                setTimeout(() => showContent(), 2000);
                setTimeout(() => showParaghaph(), 3000);
            }
        })
        .each(function() {
            if (this.complete) {
                // $(this).load(); // For jQuery < 3.0
                $(this).trigger("load"); // For jQuery >= 3.0
            }
        });
}

// img.map((e, index) => (e.onload = updateProgress()));

function updateProgress() {
    PROGRESS = PROGRESS + INCREMENT;

    $("#colored-logo").css("clip-path", `inset(0 ${100 - PROGRESS}% 0 0)`);
    console.log("progress", PROGRESS);
}

function setCenterBlock() {
    // get center point of the screen
    var X = window.innerWidth / 2 - 175;
    var Y = window.innerHeight / 2 - 140;

    console.log("X", {
        X: X,
        Y: Y
    });

    // select reveal block = grey-logo + colored logo
    var REVEAL_BLOCK = $("#revealBlock").get("0");

    console.log("REVEAL_BLOCK", REVEAL_BLOCK);

    // set Reveal block to center of the screen
    REVEAL_BLOCK.style.left = X;
    REVEAL_BLOCK.style.top = Y;
}

function updateProgressImage() {
    // document.getElementById("");
    // anime({
    //     targets: "#colored-logo",
    //     clipPath: "inset( 0 100% 0 0)",
    //     direction: "reverse",
    //     easing: "easeInOutSine",
    //     duration: 3500
    // });
}

function startReveal() {
    console.log("START REVEAL");

    //move to top
    anime({
        targets: "#revealBlock",
        scale: 0.7,
        translateX: 0,
        translateY: 0,
        top: 20,
        left: 20,
        easing: "easeInOutSine",
        duration: PAGE_REVEAL_TIME
    });

    // change background to white
    anime({
        targets: "body",
        backgroundColor: "#EAEBEA",
        easing: "easeInOutSine",
        duration: 1000,
        delay: PAGE_REVEAL_TIME + 2 * GAP
    });

    // Reveal black logo
    anime({
        targets: "#black-logo",
        opacity: 1,
        easing: "easeInOutSine",
        duration: 500,
        delay: PAGE_REVEAL_TIME
    });

    // hide loading
    anime({
        targets: "#loading-overlay",
        opacity: 0,
        easing: "easeInOutSine",
        duration: 500,
        delay: PAGE_REVEAL_TIME
    });
}

/**FLOW SHOW MAIN */
/**Show Image Collection */

// @read https://tobiasahlin.com/moving-letters/
/**Show Content */
function showContent() {
    console.log("START SHOW CONTENT");

    anime
        .timeline({
            targets: ".wrapImages",
            // translateX: ["0", 100], // from 100 to 250

            delay: 0,
            // easing: "cubicBezier(.5, .05, .1, 1)",
            opacity: 0,

            // rotate: 360,
            direction: "reverse",
            easing: "linear",
            duration: 400
        })
        .add({
            targets: ".wrapImages",
            translateY: ["0", 20]
        })
        .add({
            targets: ".wrapImages",
            // easing: "easeOutQuad",
            scale: 2
        });

    anime({
        targets: "#img-2",
        easing: "cubicBezier(.5, .05, .1, 1)",
        rotate: 15,
        translateX: ["0", 50],
        duration: TIME_TO_SHOW_IMAGE
    });

    anime({
        targets: "#img-3",
        easing: "cubicBezier(.5, .05, .1, 1)",
        rotate: -15,
        translateX: ["0", -30],
        duration: TIME_TO_SHOW_IMAGE + 1000
    });

    anime({
        targets: "#img-4",
        easing: "cubicBezier(.5, .05, .1, 1)",
        rotate: -20,
        translateY: ["0", -20],
        duration: TIME_TO_SHOW_IMAGE + 2000
    });
}

//=========== THUC THI HAM ====================
// dau tien set logo chinh giuaw
setCenterBlock();

// goi ham load - ham nay se tim hieu async
// Ham handleLoad se goi updateProgressImage de cap nhat load hinh anh

handleLoad();

// Ham StartReveal se cho handleLoad()
// load xong thi goi StartReveal()

// smooth scrolling:
// initialize
function init() {
    new SmoothScroll(document.body, 110, 10);
}

// handle smooth scroll event:
function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target =
            document.scrollingElement ||
            document.documentElement ||
            document.body.parentNode ||
            document.body; // cross browser support for document scrolling

    var moving = false;
    var pos = target.scrollTop;
    var frame =
        target === document.body && document.documentElement
            ? document.documentElement
            : target; // safari is the new IE

    target.addEventListener("mousewheel", scrolled, {
        passive: false
    });

    target.addEventListener("DOMMouseScroll", scrolled, {
        passive: false
    });

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e);

        pos += -delta * speed;
        pos = Math.max(
            0,
            Math.min(pos, target.scrollHeight - frame.clientHeight)
        ); // limit scrolling

        if (!moving) update();
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1);
            // Opera
            else return -e.detail / 3; // Firefox
        } else return e.wheelDelta / 120; // IE,Safari,Chrome
    }

    function update() {
        moving = true;

        var delta = (pos - target.scrollTop) / smooth;

        target.scrollTop += delta;

        if (Math.abs(delta) > 0.5) requestFrame(update);
        else moving = false;
    }

    var requestFrame = (function() {
        // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    })();
}

//
// call smooth scrolling:
// $(document).ready(init());

var textWrapper = document.querySelector(".description");
var textWrapper1 = document.querySelector(".description-1");
textWrapper.innerHTML = ARRAY_POST[0].description.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

function showParaghaph() {
    anime
        .timeline({
            loop: false
        })
        .add({
            targets: ".description .letter",
            scale: [4, 1],
            opacity: 1,
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 50 * i
        });
}

function showTitle() {
    anime({
        targets
    });
}
