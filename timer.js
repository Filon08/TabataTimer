const timerBlock = document.querySelector('.mainTimer'),
    roundBlock = document.querySelector("#r"),
    restBlock = document.querySelector('#re'),
    cyclesBlock = document.querySelector('#cy'),
    startBtn = document.querySelector('.strtBtn'),
    stopBtn = document.querySelector('.stpBtn')
// input= document.querySelectorAll('input')


restBlock.value = 15, cyclesBlock.value = 1, roundBlock.value = 30

function displayTime() {
    let time = `${(+roundBlock.value + +restBlock.value) * cyclesBlock.value}`
    d = Number(time);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + 'h': "00";
    var mDisplay = m > 0 ? m + 'm'  : "00";
    var sDisplay = s > 0 ? s + 's': "00";
    
    timerBlock.innerHTML = `${hDisplay+':'+mDisplay+':'+sDisplay}`;
}

displayTime()
roundBlock.oninput = () => { displayTime() }
restBlock.oninput = () => { displayTime() }
cyclesBlock.oninput = () => { displayTime() }




startBtn.onclick = function () {
    let time = Number(timerBlock.innerHTML)
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

