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
let stopwatchStatus = false;
let mili = 0;
let h=0,m=0,s=0;
function change(){
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
}

function stopwatch(){
    if(stopwatchStatus){
        setInterval(change,10);
    }
    else{
        milisecond.textContent = mili;
        second.textContent = s;
        minute.textContent = m;
        hour.textContent = h;
    }
}

startStopwatch.addEventListener('click' , () => {
    startStopwatch.className = 'start-stopwatch hide';
    // resetStopwatch.className = 'reset-stopwatch';
    stopStopwatch.className = 'stop-stopwatch';
    stopwatchStatus = true;
    stopwatch();
    
});
stopStopwatch.addEventListener('click',() => {
    startStopwatch.className = 'start-stopwatch';
    stopStopwatch.className = 'stop-stopwatch hide';
    stopwatchStatus = false;
    stopwatch();

});



// for timer