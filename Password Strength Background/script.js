const inputPass = document.getElementById('password')
const background = document.getElementById('background')

inputPass.addEventListener('input', (e) => {
    const inputValue = e.target.value
    const inputLength = inputValue.length
    const blurValue = 20 - inputLength * 2
    background.style.filter = `blur(${blurValue}px)`
})