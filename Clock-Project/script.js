// for digital clock
function changeTime(){
    const time = new Date;
    // document.querySelector('.hour').textContent = time;
    document.querySelector('.clock-hour').textContent = time.getHours();
    document.querySelector('.clock-minute').textContent = time.getMinutes();
    document.querySelector('.clock-second').textContent = time.getSeconds();

}
setInterval(changeTime, 1000);

// for stopwatch
const startStopwatch = document.querySelector('.start-stopwatch');
const stopStopwatch = document.querySelector('.stop-stopwatch');
const resetStopwatch = document.querySelector('.reset-stopwatch');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const milisecond = document.querySelector('.milisecond');
let stopwatch;
let stopwatchStatus = false;
let mili = 0;
let h=0,m=0,s=0;
function change(){
    // if(stopwatchStatus){
        mili += 10;
        if(mili === 1000){
            mili = 0;
            s++;
        }
        if(s === 60){
            s = 0;
            m++;
        }
        if(m === 60){
            m = 0;
            h++;
        }
        milisecond.textContent = mili;
        second.textContent = s;
        minute.textContent = m;
        hour.textContent = h;
    // }
}


startStopwatch.addEventListener('click' , () => {
    startStopwatch.className = 'start-stopwatch hide';
    // resetStopwatch.className = 'reset-stopwatch';
    stopStopwatch.className = 'stop-stopwatch';
    resetStopwatch.className = 'reset-stopwatch hide';
    // stopwatchStatus = true;
    stopwatch = setInterval(change,10);
    
});
stopStopwatch.addEventListener('click',() => {
    startStopwatch.className = 'start-stopwatch';
    resetStopwatch.className = 'reset-stopwatch';
    startStopwatch.innerText = 'Resume';
    stopStopwatch.className = 'stop-stopwatch hide';
    // stopwatchStatus = false;
    clearTimeout(stopwatch);
    
});
resetStopwatch.addEventListener('click', () => {
    resetStopwatch.className = 'reset-stopwatch hide';
    startStopwatch.innerText = 'Start';
    mili = 0;
    s = 0;
    m = 0;
    // clearTimeout(stopwatch);
    h = 0;
    // stopwatchStatus = false;
    milisecond.textContent = mili;
    second.textContent = s;
    minute.textContent = m;
    hour.textContent = h;
});


// for timer