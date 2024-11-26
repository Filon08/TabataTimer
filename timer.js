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
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + 'h' : "00";
    let mDisplay = m > 0 ? m + 'm' : "00";
    let sDisplay = s > 0 ? s + 's' : "00";

    timerBlock.innerHTML = `${hDisplay + ':' + mDisplay + ':' + sDisplay}`;
}

displayTime()
roundBlock.oninput = () => { displayTime() }
restBlock.oninput = () => { displayTime() }
cyclesBlock.oninput = () => { displayTime() }




startBtn.onclick = function () {
    let time = `${(+roundBlock.value + +restBlock.value) * cyclesBlock.value}`
    d = Number(time);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    let t = `${h + ':' + m + ':' + s}`
    timerBlock.innerHTML = t
    const timerId = setInterval(() => {
        s <= 0 ?
            (m--, s = 59, m <= 0 ? (h--, m = 59) : m)
            : s--,
            t = `${h + ':' + m + ':' + s}`
        timerBlock.innerHTML = t, timerBlock.innerHTML = t, console.log('s: ', s);
        if (h <= 0 && m<=0 && s<=0) { clearInterval(timerId), alert('Done')}
}, 1000);
stopBtn.onclick = function () {
    clearInterval(timerId), timerBlock.innerHTML = 0
}
}

