randomNumber = (Math.random()*100+1).toFixed(0)
console.log(randomNumber)

const sbButton = document.querySelector('#sbmtbutton')

const guessesTillNow = document.querySelector('#guesses')
const guessesLeft = document.querySelector('#guessesLeft')
const loworhigh = document.querySelector('#loworhigh')

sbButton.addEventListener( 'click',function(e){

} )

let guess_left = 10;
let arr = [];

sbButton.addEventListener( 'click',function(e){
    const userInput = parseInt(document.querySelector('#input').value)

    
    arr.push(userInput)
    guessesTillNow.innerHTML = arr.join(', ')

    guess_left--;
    guessesLeft.innerHTML = guess_left;

    if(userInput==randomNumber){
        loworhigh.innerHTML = "you won"
        sbButton.disabled = true;
    }
    else if(userInput>randomNumber)loworhigh.innerHTML = "guess low"
    else loworhigh.innerHTML = "guess high"
    input.value=""

    if(guess_left==0){
        loworhigh.innerHTML=`you lost ... the random number was ${randomNumber}`
        sbButton.disabled = true;
        return;
    }
} )