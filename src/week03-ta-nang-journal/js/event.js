console.log("EVENT");
const DEBOUNCE_TIME = 1000;
const THROTTLE_TIME = 1000;
// const TIME_TO_SHOW_IMAGE = 1500;

// PREV TRACKPOINT BUTTON
$("#prev--btn").click(
    throttle(function() {
        let currentItem = sessionStorage.getItem("currentItem");
        console.log(currentItem);
        if (currentItem == 0) return 0;
        // decrease 1 value
        currentItem = parseInt(currentItem) - 1;
        sessionStorage.setItem("currentItem", currentItem);
        console.log(TRACKLOG[currentItem]);
        // add new class move-out
        $(".title").addClass("move-out");
        $(".description").addClass("move-out");
        $(".wrapImages").empty();
        moveOut();
        // append new node
        $(".block-title").append(
            `<h1 class="title">${TRACKLOG[currentItem].title}</h1>`
        );
        $(".block-description").append(
            `<p class="description">${TRACKLOG[currentItem].description}</p>`
        );
        $(`.wrapImages`).append(() => {
            let imgArray = "";
            for (let i = 1; i <= 4; i++) {
                imgArray += `
                    <img src="${
                        TRACKLOG[currentItem].image_collections[i - 1]
                    }" alt="" id="img-${i}">
                `;
            }
            return imgArray;
        });
    }, THROTTLE_TIME)
);

// NEXT TRACKPOINT BUTTON
$("#next--btn").click(
    throttle(function() {
        let currentItem = sessionStorage.getItem("currentItem");
        console.log(currentItem);
        if (currentItem >= 10) return 0;
        // decrease 1 value
        currentItem = parseInt(currentItem) + 1;
        sessionStorage.setItem("currentItem", currentItem);
        console.log(TRACKLOG[currentItem]);
        // add new class move-out
        $(".title").addClass("move-out");
        $(".description").addClass("move-out");
        $(".wrapImages").empty();
        console.log($(".wrapImages img"));
        moveOut();
        // append new node
        $(".block-title").append(
            `<h1 class="title">${TRACKLOG[currentItem].title}</h1>`
        );
        $(".block-description").append(
            `<p class="description">${TRACKLOG[currentItem].description}</p>`
        );
        $(`.wrapImages`).append(() => {
            let imgArray = "";
            for (let i = 1; i <= 4; i++) {
                imgArray += `
                    <img src="${
                        TRACKLOG[currentItem].image_collections[i - 1]
                    }" alt="" id="img-${i}">
                `;
            }
            return imgArray;
        });
    }, THROTTLE_TIME)
);

//===== MOVE OUT ANIMATION =======
function moveOut() {
    console.log("RUN MOVE OUT");
    anime({
        targets: ".move-out",
        opacity: 0,
        translateX: -10,
        duration: 1000,
        easing: "easeOutExpo",
        complete: function() {
            $(".move-out").remove();
        }
    });

    anime({
        targets: ".move-out",
        opacity: 0,
        translateX: -10,
        duration: 1000,
        easing: "easeOutExpo",
        complete: function() {
            $(".move-out").remove();
        }
    });
    setTimeout(() => {
        showContent();
    }, 1);
    showContent();
}

function showContent() {
    console.log("START SHOW CONTENT");

    anime
        .timeline({
            targets: ".wrapImages",
            // translateX: ["0", 100], // from 100 to 250

            delay: 0,
            // easing: "cubicBezier(.5, .05, .1, 1)",
            opacity: [1, 0],

            // rotate: 360,
            direction: "reverse",
            easing: "linear",
            duration: 500
        })
        .add({
            targets: ".wrapImages",
            translateY: ["0", 20]
        })
        .add({
            targets: ".wrapImages",
            // easing: "easeOutQuad",
            scale: [2, 1]
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

// var moveTitleOut = anime({
//     targets: ".title move-out",
//     opacity: 0,
// })

// Chuyen qua moc ke tiep
let childIndex = "";
console.log("progressbar: ", $(".progressbar li .dotStage"));
// const dotStageArray = $(".progressbar").on("click", "li", () => {
// console.log($(this).index()){
// const parent = $(dotStageArray)
//     .parent()
//     .parent();
// childIndex = $(parent).index();
// console.log($(dotStageArray));
// });
$(document).ready(() => {
    $(".progressbar li .dotStage").click(event => {
        console.log(
            "index: ",
            // $(".progressbar")
            //     .children()
            //     .index()
            this.event
        );
    });
});
// Chuyen qua moc k)e tiep
function trackPointTransition() {
    // Animation when CURRENT item move out
    // Animation when NEW item move in
}
