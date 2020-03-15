console.log('EVENT')
const DEBOUNCE_TIME = 1000;
const THROTTLE_TIME = 1000;

// PREV TRACKPOINT BUTTON
$("#prev--btn").click(throttle(function() {
    let currentItem = sessionStorage.getItem('currentItem');
    console.log(currentItem);
    if (currentItem == 0) return 0;
    // decrease 1 value
    currentItem = parseInt(currentItem) - 1
    sessionStorage.setItem('currentItem', currentItem);
    console.log(ARRAY_POST[currentItem]);
}, THROTTLE_TIME));

// NEXT TRACKPOINT BUTTON
$("#next--btn").click(throttle(function() {
    let currentItem = sessionStorage.getItem('currentItem');
    console.log(currentItem);
    if (currentItem >= 10) return 0;
    // decrease 1 value
    currentItem = parseInt(currentItem) + 1
    sessionStorage.setItem('currentItem', currentItem);
    console.log(ARRAY_POST[currentItem]);
}, THROTTLE_TIME));


// Chuyen qua moc ke tiep
function trackPointTransition() {
    // Animation when CURRENT item move out

    // Animation when NEW item move in
}
