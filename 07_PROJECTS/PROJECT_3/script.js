const time = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    const cur_time = date.toLocaleTimeString();
    time.innerHTML = cur_time;
},1000)
// yaha pe 1000 is the time for each interval in miliseconds