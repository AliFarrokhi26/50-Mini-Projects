const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500


for (let i = 0; i < SQUARES; i++) {
    const sqr=document.createElement('div')
    sqr.classList.add('square')

    sqr.addEventListener('mouseover',()=>setColor(sqr))
    sqr.addEventListener('mouseout',()=>removeColor(sqr))

    container.appendChild(sqr)
}

function setColor(element){
    const color = colors[Math.floor(Math.random() * colors.length)]
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}
function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}

