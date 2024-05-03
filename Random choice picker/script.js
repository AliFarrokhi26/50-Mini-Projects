const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')

textarea.focus()

textarea.addEventListener('keyup',(event)=>{
    seperatecamma(event.target.value)

    if(event.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})


function seperatecamma(input){
    const choices = input.split(',')
    .filter(input=>input.trim() !== '')
    .map(tag=>tag.trim())

    console.log(choices);

    tagsEl.innerHTML=``

    choices.forEach(choice => {
        const span= document.createElement('span')
        span.classList.add('tag')
        span.innerText = choice
        tagsEl.appendChild(span)
        
    });

    
}


function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}