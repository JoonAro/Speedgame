const startButton = document.querySelector('#start');
const endButton = document.querySelector('#end');
//take all circles with circle class and also queryselectorAll creates a nodelist
const circles = document.querySelectorAll('.circle');
//function to tell wich circle was clicked
const scoreDisplay = document.querySelector('.score')

let score = 0;

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

console.log(getRndInteger(0, 3))

const clickCircle = (i) => {
    console.log('circle was clicked', i);
    score += 10;
    scoreDisplay.textContent = score;
}

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))
})


startGame = () => {
    console.log('game started');
}

endGame = () => {
    console.log('game ended');
}


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
