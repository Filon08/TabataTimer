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

function runStuff() {
    console.log("start the exercise");
}
function endStuff() {
    console.log("finish the exercise to rest");
}
function nextStuff() {
    console.log("next exercise");
}


startBtn.onclick = function () {
    a = +roundBlock.value
    b = +restBlock.value
    c = cyclesBlock.value
 

    let time = `${(+roundBlock.value + +restBlock.value) * cyclesBlock.value}`
    d = Number(time);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    let t = `${h + ':' + m + ':' + s}`
    timerBlock.innerHTML = t

   
        const timerId = setInterval(() => {
            console.log('s: ', s);
            (h <= 0 && m <= 0 && s <= 0) ? (clearInterval(timerId), console.log('Done')) :
                (s <= 0 && h > 0 && m > 0) ? (h--, m--, s = 59) :
                    (s <= 0 && h > 0 && m <= 0) ? (h--, m = 59, s = 59) :
                        (s <= 0 && h <= 0 && m > 0) ? (h = 0, m--, s = 59) :
                            (s <= 0 && h <= 0 && m <= 0) ? (h = 0, m--, s = 59) :

                                s--, timerBlock.innerHTML = `${h + ':' + m + ':' + s}`


        }, 1000);


    stopBtn.onclick = function () {
        clearInterval(timerId), timerBlock.innerHTML = 0
    }
}

