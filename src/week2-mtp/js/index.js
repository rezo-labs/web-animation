// import anime from "animejs";
// import anime from "animejs/lib/anime.es.js";
// const anime = require("animejs");

// const box = anime({
//     targets: ".box",
//     translateX: 300,
//     backgroundColor: "#FFF",
//     duration: 1000,
//     loop: true,
//     direction: "alternate",
//     borderRadius: ["0%", "50%"],
//     easing: "easeInOutQuad",
//     autoplay: false
// });

const drawPictureStart = anime({
    targets: "#markerStart",
    easing: "easeInOutSine",
    opacity: [0, 1],
    duration: 3000,
    delay: 0,
    endDelay: 6000,
    autoplay: true,
    // direction: "reverse",
    loop: true
});
const drawMap = anime({
    // targets: "#path",
    targets: "#path g path",
    strokeDashoffset: [anime.setDashoffset, 0],
    // height: [0, 308],
    easing: "easeInOutSine",
    duration: 3000,
    endDelay: 3000,
    delay: 3000,
    autoplay: true,
    loop: true
});
const drawPictureEnd = anime({
    targets: "#markerEnd",
    easing: "easeInOutSine",
    opacity: [0, 1],
    duration: 3000,
    endDelay: 3000,
    delay: 3000,
    autoplay: true,
    // direction: "alternate",
    loop: true
});

// document.querySelector(".play").onclick = box.play;
// document.querySelector(".pause").onclick = box.pause;

// document.querySelector(".draw").onclick = drawMouse.play;
// document.querySelector(".draw-pause").onclick = drawMouse.pause;

// document.querySelector(".buttonStart").onclick = drawPictureStart.play;
// document.querySelector("#path").onclick = drawMap.play;
// document.querySelector("#markerStart").onclick = drawPictureEnd.play;
// document.querySelector(".pause").onclick = box.pause;
