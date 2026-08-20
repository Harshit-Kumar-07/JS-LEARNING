function make_bubble(){
    let clutter = '';

    for(let i = 1;i<=140;i++){
        let random = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${random}</div>`
    }

    document.querySelector("#panel_bottom").innerHTML = clutter
}

function play_correct_click_sound(){
    let sound = document.getElementById('correct_click_sound')
    sound.play()
}
function play_wrong_click_sound(){
    let sound = document.getElementById('wrong_click_sound')
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

            if(score>highScore){
                highScore=score
                localStorage.setItem("highScore",highScore)
                document.querySelector("#highscorebox").textContent = highScore
            }

            document.querySelector("#panel_bottom").innerHTML = `
            <div id="game_over_message">GAME OVER  ᡕᠵデᡁ᠊╾━</div> 
            <div id="restart_btn">RESTART</div>
            `

            play_game_over_sound()

            document.getElementById("restart_btn")
            .addEventListener('click',function(button){
                make_bubble()
                get_new_hit()
                document.getElementById('timer_box').innerHTML = '60'
                document.getElementById('scorebox').innerHTML = '0' 
                score = 0
            })
        }
        document.querySelector("#timer_box").textContent = timer
    },1000);
}

let random
function get_new_hit(){
    random = Math.floor(Math.random()*10)
    document.querySelector("#hitbox").textContent = random
}

let score = 0;
function increase_score(){
    score++;
    document.querySelector("#scorebox").textContent = score
}
function decrease_score(){
    if(score>0)score--;
    document.querySelector("#scorebox").textContent = score
}




let highScore = localStorage.getItem("highScore") || 0
document.querySelector("#highscorebox").textContent = highScore


document.querySelector("#panel_bottom")
.addEventListener("click",function(destination){
    let clicked_num = Number(destination.target.textContent)    
    if(random==clicked_num){
        play_correct_click_sound()
        increase_score()
        make_bubble()
        get_new_hit()
    }
    else{
        play_wrong_click_sound()
        decrease_score()
    }
})


document.querySelector("#start_btn")
.addEventListener("click",function(button){
    run_timer()
    button.target.disabled = true
})




make_bubble()

get_new_hit()