const counters = document.querySelectorAll('.counter')


counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        // + is a type caster like Number(string)
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 2000

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 100);
        }else{
            counter.innerText = target
        }
    }

    updateCounter()

})
