window.onload = function() {

    document.addEventListener('swiped-left', function(e) {
        console.log(e.type);
        console.log(e.target);
        e.target.innerHTML = e.type;
        $('.test-swipe').text("LEFT")
    });

    document.addEventListener('swiped-right', function(e) {
        console.log(e.type);
        console.log(e.target);
        e.target.innerHTML = e.type;
        $('.test-swipe').text("RIGHT")

    });

    document.addEventListener('swiped-up', function(e) {
        console.log(e.type);
        console.log(e.target);
        e.target.innerHTML = e.type;
        $('.test-swipe').text("UP")

    });

    document.addEventListener('swiped-down', function(e) {
        console.log(e.type);
        console.log(e.target);
        e.target.innerHTML = e.type;
        $('.test-swipe').text("DOWN")

    });

}