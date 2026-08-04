const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(btn){
    btn.addEventListener('click', function(e){
        if(e.target.id === 'blue'){
            document.querySelector('body').style.background = 'linear-gradient(180deg, #003bff 0.000%, #004bff 8.333%, #125cff 16.667%, #2b6cff 25.000%, #447bff 33.333%, #5d8bff 41.667%, #7499ff 50.000%, #8aa7ff 58.333%, #9db3ff 66.667%, #adbfff 75.000%, #b9c9ff 83.333%, #c2d2ff 91.667%, #c6d9ff 100.000%)';
        }
        if(e.target.id === 'green'){
            document.querySelector('body').style.background = 'linear-gradient(225deg, #003716 0.000%, #004d00 25.000%, #007103 50.000%, #00a331 75.000%, #00e07c 100.000%)';
        }
        if(e.target.id === 'red'){
            document.querySelector('body').style.background = 'linear-gradient(315deg, #880400 0.000%, #a20100 20.000%, #c30e00 40.000%, #e32a00 60.000%, #f95400 80.000%, #ff8b00 100.000%)';
        }
        if(e.target.id === 'yellow'){
            document.querySelector('body').style.background = 'linear-gradient(90deg, #ffffff 0.000%, #ffffd7 16.667%, #ffff9c 33.333%, #ffff64 50.000%, #ffd233 66.667%, #ff9f0c 83.333%, #ff7300 100.000%)';
        }
    })
} )