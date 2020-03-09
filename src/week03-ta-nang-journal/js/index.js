const img = $("img").toArray();
var PROGRESS = 0;
var INCREMENT = 100 / img.length;
const PAGE_REVEAL_TIME = 1000;
const GAP = 300;

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
                startReveal();
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
    $("#colored-logo").css("clip-path", `inset(0 ${100 - PROGRESS}% 0 0 )`);
    console.log("progress", PROGRESS);
}

function setCenterBlock() {
    // get center point of the screen
    var X = window.innerWidth / 2 - 175;
    var Y = window.innerHeight / 2 - 140;

    console.log("X", { X: X, Y: Y });

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
        backgroundColor: "#FFF",
        easing: "easeInOutSine",
        duration: 500,
        delay: PAGE_REVEAL_TIME+GAP
    });

    // Reveal black logo
    anime({
        targets: "#black-logo",
        opacity: 1,
        easing: "easeInOutSine",
        duration: 500,
        delay: PAGE_REVEAL_TIME,
    });

    // hide loading
    anime({
        targets: "#loading-overlay",
        opacity: 0,
        easing: "easeInOutSine",
        duration: 500,
        delay: PAGE_REVEAL_TIME,
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
