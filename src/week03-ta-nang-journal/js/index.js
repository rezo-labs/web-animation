console.log('hello')
var LOGO_LENGTH = 350;
var LOADING_LENGTH = 350;
var INCREMENT = 20;
var X = window.innerWidth / 2 - 175;
var Y = window.innerHeight / 2 - 140;
var REVEAL_BLOCK = document.getElementById("revealBlock");
REVEAL_BLOCK.style.left = X;
REVEAL_BLOCK.style.top = Y;

anime({
    targets: '#colored-logo',
    opacity: 1,
    easing: "easeInOutSine",
    duration: 4000
});

anime({
    targets: '#revealBlock',
    scale: 0.7,
    translateX: 0,
    translateY: 0,
    top: 20,
    left: 20,
    easing: "easeInOutSine",
    delay: 3000,
    duration: 500,
});

anime({
    targets: '#loading-overlay',
    opacity: 0,
    delay: 3000,
    easing: "easeInOutSine",
    duration: 550,
})

anime({
    targets: "#black-logo",
    opacity: 1,
    delay: 3500,
    easing: "easeInOutSine",
    duration: 300,
})

anime({
    targets: 'body',
    backgroundColor: '#FFF',  
    duration: 200,
    delay: 3200,
    easing: "easeInOutSine",
    duration: 550,
})





// function isReady() {
//     if (LOADING_LENGTH > 350) return true;
//     return false 
// }

// var refreshId = setInterval(function() {
//     if (isReady()) {
//         clearInterval(refreshId);
//     }
//     LOADING_LENGTH = LOADING_LENGTH - INCREMENT;
//     anime({
//         targets: '#colored-logo',
//         translateX: -LOADING_LENGTH,
//       });
// }, 1000);