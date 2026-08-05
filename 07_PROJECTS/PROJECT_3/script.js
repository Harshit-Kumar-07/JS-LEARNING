const time = document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    const cur_time = date.toLocaleTimeString();
    time.innerHTML = cur_time;
},1000)