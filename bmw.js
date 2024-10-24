var nextbtn = document.querySelector('.next'),
prevbtn = document.querySelector('.prev'),
container = document.querySelector('.container'),
list = document.querySelector('.list');
item = document.querySelector('.item'),
runningTime = document.querySelector('.timeRunning')

let timeRunning = 3000;
let timeAutoNext = 10000;


nextbtn.onclick = function(){
    showSlider('next')
}
prevbtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut
let runNextAuto = setTimeout(() => {
    nextbtn.click()
}, timeAutoNext)

function resetTimeAnimation(){
    runningTime.style.animation = 'none'
    runningTime.offsetHeight 
    runningTime.style.animation = null 
    runningTime.style.animation = 'runningTime 10s linear 1 forwards'
}
function showSlider(type){
    let sliderItemsDom = list.querySelectorAll('.container .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        container.classList.add('next')
    }else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        container.classList.add('prev')
    }
    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('prev')
    },  timeRunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextbtn.click()
    },timeAutoNext)
    resetTimeAnimation() // reset the running time animation
}

resetTimeAnimation() //initialize the running time animation