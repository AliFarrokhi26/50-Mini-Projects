const background = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(update, 30);

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

function update() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    console.log(load);

    loadingText.textContent = `${load}%`;
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    loadingText.style.opacity= scale(load,0,100,1,0);

}


