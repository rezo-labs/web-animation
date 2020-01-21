console.log('hello world');
console.log('test browser sync');
// const anime = require('animejs');
const box = anime({
    targets: '.box',
    translateX: 300,
    backgroundColor: '#FFF',
    duration: 1000,
    loop: true,
    direction: 'alternate',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    autoplay: false,
})

const drawMouse = anime({
    targets: '.mouse path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true,
    autoplay: false
  });

document.querySelector('.play').onclick = box.play;
document.querySelector('.pause').onclick = box.pause;

document.querySelector('.draw').onclick = drawMouse.play;
document.querySelector('.draw-pause').onclick = drawMouse.pause;



