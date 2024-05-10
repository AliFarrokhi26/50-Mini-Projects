const nav = document.querySelector('.nav')
const herotitle= document.getElementById('heroH1')
const heroText='Welcome To My Website'
let index = 0
liveHeroAnimation()


function liveHeroAnimation(){
herotitle.innerText=heroText.slice(0,index)
index++

if (index > heroText.length) {
    index = 0
}

setTimeout(liveHeroAnimation,100);
}

window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}