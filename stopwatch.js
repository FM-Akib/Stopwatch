let seconds=0;
let min = 0;
let interval;
document.getElementById('start-btn').addEventListener('click', function(){
    const SecondsDiv = document.getElementById('seconds')
    interval=setInterval(()=>{
        seconds++;
        if(seconds>60){
            seconds =0;
            min++;
          document.getElementById('min').innerHTML=min

        }
        SecondsDiv.innerHTML=seconds;
    },1000)
})

document.getElementById('stop-btn').addEventListener('click',()=>{
    // console.log(interval)
    clearInterval(interval)
    document.getElementById('seconds').innerHTML=seconds
    document.getElementById('min').innerHTML=min

})