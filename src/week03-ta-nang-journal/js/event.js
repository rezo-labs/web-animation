console.log("EVENT");
const DEBOUNCE_TIME = 1000;
const THROTTLE_TIME = 1000;

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
         moveOut()
         // append new node
         $(".block-title").append(`<h1 class="title">${TRACKLOG[currentItem].title}</h1>`);
         $(".block-description").append(`<p class="description">${TRACKLOG[currentItem].description}</p>`);
 
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
        moveOut()
        // append new node
        $(".block-title").append(`<h1 class="title">${TRACKLOG[currentItem].title}</h1>`);
        $(".block-description").append(`<p class="description">${TRACKLOG[currentItem].description}</p>`);

    }, THROTTLE_TIME)
);

//===== MOVE OUT ANIMATION =======
function moveOut() {
    console.log('RUN MOVE OUT')
    anime({
        targets: ".move-out",
        opacity: 0,
        translateX: -10,
        duration: 1000,
        easing: "easeOutExpo",
        complete: function() {
            $(".move-out").remove();
        }
    })
    
    anime({
        targets: ".move-out",
        opacity: 0,
        translateX: -10,
        duration: 1000,
        easing: "easeOutExpo",
        complete: function() {
            $(".move-out").remove();
        }

    })
}

// var moveTitleOut = anime({
//     targets: ".title move-out",
//     opacity: 0,
// })


// Chuyen qua moc ke tiep
function trackPointTransition() {
    // Animation when CURRENT item move out
    // Animation when NEW item move in
}
