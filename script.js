const againBtn = document.querySelector('.again')
const chechBtn = document.querySelector('.check')
const number = document.querySelector('.number')
const guessInput = document.querySelector('.guess')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const color = document.querySelector('.site-content')

let scoreEl = 20

const randomNumber = Math.floor(Math.random() * 20 + 1)

chechBtn.addEventListener('click', check)

function check() {
    const checkValue = +guessInput.value
    console.log(randomNumber);
    if (checkValue) {
        if (randomNumber == checkValue) {
            message.textContent = '🏆 You Winner'            
            color.style.background = 'green'
            const randomNumber = Math.floor(Math.random() * 20 + 1)
        }else if(randomNumber >= checkValue){
            message.textContent = '⬆️ Guess Higher Number'
        }else if(randomNumber <= checkValue){
            message.textContent = '⬇️ Guess Lower Number'
        }
        scoreEl--
        score.textContent = scoreEl
        highscore.textContent = scoreEl
    }else{
        message.textContent = '⛔ No number'
    }
    
}
againBtn.addEventListener('click' , again)

function again() {   
    window.location.reload();    
}

