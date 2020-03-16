console.log("EVENT");
const DEBOUNCE_TIME = 1000;
const THROTTLE_TIME = 1000;
const TIME_SHOW_IMAGE = 500;

// PREV TRACKPOINT BUTTON
$("#prev--btn").click(
    throttle(function() {
        let currentItem = sessionStorage.getItem("currentItem");
        console.log(currentItem);
        if (currentItem == 0) return 0;
        // decrease 1 value
        currentItem = parseInt(currentItem) - 1;
        sessionStorage.setItem("currentItem", currentItem);
        // add new class move-out
        $(".title").addClass("move-out");
        $(".description").addClass("move-out");
        // $(".wrapImages").empty();
        $(".wrapImages")
            .children()
            .each(function() {
                $(this).addClass("move-out-image");
            });
        // $(".wrapImages").addClass("will-be-removed")

        moveOutImage(0.8);

        moveOut();
        // append new node
        $(".block-title").append(
            `<h1 class="title">${TRACKLOG[currentItem].title}</h1>`
        );
        $(".block-description").append(
            `<p class="description">${TRACKLOG[currentItem].description}</p>`
        );

        setTimeout(() => {
            $(`.image-collection`).append(() => {
                let imgArray = "";
                for (let i = 1; i <= 4; i++) {
                    imgArray += `
                    <img src="${
                        TRACKLOG[currentItem].image_collections[i - 1]
                    }" alt="" id="img-${i}">
                `;
                }
                let result = `<div class="wrapImages fly-in">${imgArray}</div>`;
                return result;
            });
            showContent1();
        }, 400);
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
        // $(".wrapImages").empty();
        $(".wrapImages")
            .children()
            .each(function() {
                $(this).addClass("move-out-image");
            });
        // $(".wrapImages").addClass("will-be-removed")

        moveOutImage();

        moveOut();
        // append new node
        $(".block-title").append(
            `<h1 class="title">${TRACKLOG[currentItem].title}</h1>`
        );
        $(".block-description").append(
            `<p class="description">${TRACKLOG[currentItem].description}</p>`
        );

        setTimeout(() => {
            $(`.image-collection`).append(() => {
                let imgArray = "";
                for (let i = 1; i <= 4; i++) {
                    imgArray += `
                    <img src="${
                        TRACKLOG[currentItem].image_collections[i - 1]
                    }" alt="" id="img-${i}">
                `;
                }
                let result = `<div class="wrapImages fly-in">${imgArray}</div>`;
                return result;
            });
            showContent1();
        }, 400);
    }, THROTTLE_TIME)
);

//===== MOVE OUT ANIMATION =======

function moveOutImage(scaleNumExtra = 0) {
    anime({
        targets: ".move-out-image",
        rotate: "0",
        translateX: 0,
        translateY: 0,
        scale: 0.7 + scaleNumExtra,
        opacity: 0.2,
        duration: 600,
        easing: "easeOutExpo",
        complete: function() {
            $(".move-out-image")
                .parent()
                .remove();
            anime({
                targets: ".fly-in",
                opacity: [0.2, 1],
                // translateY: ["0", 20],
                scale: [0.7 + scaleNumExtra, 1],
                // scale: [1,1.2],
                duration: 500,
                easing: "cubicBezier(0,3,1,1)",
                // easing: "linear",
                complete: function() {
                    // console.log("wrapImages");
                    $(".wrapImages").removeClass("fly-in");
                }
            });
        }
    });
}

function moveOut() {
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
}

function showContent1() {
    anime({
        targets: "#img-2",
        easing: "spring(1, 80, 10, 0)",
        rotate: 15,
        translateX: ["0", 50],
        delay: 600,
        duration: 500
    });

    anime({
        targets: "#img-3",
        easing: "spring(1, 80, 10, 0)",
        rotate: -15,
        translateX: ["0", -30],
        delay: 600,
        duration: 900
    });

    anime({
        targets: "#img-4",
        // easing: "cubicBezier(0,.99,.56,.52)",
        easing: "spring(1, 80, 10, 0)",
        rotate: -20,
        translateY: ["0", -20],
        delay: 600,
        duration: 1300
    });
}

// Chuyen qua moc ke tiep
let childIndex = "";
// const dotStageArray = $(".progressbar").on("click", "li", () => {
// console.log($(this).index()){
// const parent = $(dotStageArray)
//     .parent()
//     .parent();
// childIndex = $(parent).index();
// console.log($(dotStageArray));
// });

// Chuyen qua moc k)e tiep
function trackPointTransition() {
    // Animation when CURRENT item move out
    // Animation when NEW item move in
}
