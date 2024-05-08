
const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getDate, 500);

function getDate() {
    header.innerHTML = `<img src="http://source.unsplash.com/random" alt="random image">`
    title.textContent = 'Lorem ipsum dolor sit amet'

    excerpt.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, necessitatibus debitis. Quod corporis officiis illo maxime corrupti facilis maiores placeat!'
    profile_img.innerHTML = `<img src="http://source.unsplash.com/random" alt="random image">`
    name.textContent = 'random name'
    date.textContent = '8 May'
    animated_bg_texts.forEach(animated_bg_text => animated_bg_text.classList.remove('animated-bg-text'))
    animated_bgs.forEach(animated_bg => animated_bg.classList.remove('animated-bg'))
}