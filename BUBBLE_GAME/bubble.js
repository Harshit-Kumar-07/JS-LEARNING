function make_bubble(){
    let clutter = '';

    for(let i = 1;i<=140;i++){
        let random = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${random}</div>`
    }

    document.querySelector("#panel_bottom").innerHTML = clutter
}

function play_click_sound(){
    let sound = document.getElementById('click_sound')
    sound.play()
}
function play_game_over_sound(){
    let sound = document.getElementById('game_over_sound')
    sound.play()
}

function run_timer(){
    let timer = 60
    let running_time = setInterval(function(){
        timer--;
        if(timer<=0){
            clearInterval(running_time)
            document.querySelector("#panel_bottom").innerHTML = `GAME OVER  ᡕᠵデᡁ᠊╾━ `
            play_game_over_sound()
            document.getElementById('panel_bottom').style.color = 'green'
            document.getElementById('panel_bottom').style.fontSize = '70px'
        }
        document.querySelector("#timer_box").textContent = timer
    },1000);
}

let random
function get_new_hit(){
    random = Math.floor(Math.random()*10)
    document.querySelector("#hitbox").textContent = random
}

let score = -1;
function increase_score(){
    score++;
    document.querySelector("#scorebox").textContent = score
}




document.querySelector("#panel_bottom")
.addEventListener("click",function(destination){
    let clicked_num = Number(destination.target.textContent)    
    if(random==clicked_num){
        play_click_sound()
        increase_score()
        make_bubble()
        get_new_hit()
    }
})


document.querySelector("#start_btn")
.addEventListener("click",function(button){
    run_timer()
    button.target.remove()
})

make_bubble()

get_new_hit()
increase_score()