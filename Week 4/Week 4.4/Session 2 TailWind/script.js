const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const main = document.querySelector('#main')

let miniCircle = document.querySelector('#miniCircle');

function mouseFollower(){
    main.addEventListener('mouseover', (e)=>{
        miniCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        })
}

mouseFollower()

