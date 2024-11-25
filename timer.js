const timerBlock = document.querySelector('.mainTimer'),
    roundBlock = document.querySelector("#r"),
    restBlock = document.querySelector('#re'),
    cyclesBlock = document.querySelector('#cy'),
    startBtn = document.querySelector('.strtBtn'),
    stopBtn = document.querySelector('.stpBtn')


restBlock.value = 15, cyclesBlock.value = 1, roundBlock.value = 30

let time = ((+roundBlock.value + +restBlock.value) * cyclesBlock.value)
timerBlock.innerHTML = `${time} sec`



startBtn.onclick = function () {
    let time = ((+roundBlock.value + +restBlock.value) * cyclesBlock.value)
    timerBlock.innerHTML = `${time} sec`
    const timerId = setInterval(() => {
        time <= 0 ?
            clearInterval(timerId)
            : time--,
            timerBlock.innerHTML = `${time} sec`
    }, 1000);
    stopBtn.onclick = function () {
        clearInterval(timerId), timerBlock.innerHTML = 0
    }
}

