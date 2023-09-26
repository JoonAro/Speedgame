const startButton = document.querySelector('#start');
const endButton = document.querySelector('#end');
//take all circles with circle class
const circles = document.querySelectorAll('.circle');

const clickCircle = () => {
    console.log('circle was clicked');
}

circles.forEach((circle) => {
    circle.addEventListener('click', clickCircle)
})


startGame = () => {
    console.log('game started');
}

endGame = () => {
    console.log('game ended');
}


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
