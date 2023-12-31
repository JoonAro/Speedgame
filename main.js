const startButton = document.querySelector('#start');
const endButton = document.querySelector('#end');
//take all circles with circle class and also queryselectorAll creates a nodelist
const circles = document.querySelectorAll('.circle');
//function to tell wich circle was clicked
const scoreDisplay = document.querySelector('.score');
const modal = document.querySelector('#modal');
const feedBack = document.querySelector('.feedback');
const finalScore = document.querySelector('.finalScore');
const close = document.querySelector('.close');
const reset = document.querySelector('.reset');
let timer;
let pace = 1000;
let active = 0;
let score = 0;
let rounds = 0;
const audio = new Audio('big-punch-short-with-male-moan-83735.mp3');
const audio2 = new Audio('hard-punch-80578.mp3');        
const audio3 = new Audio('punch-2-37333.mp3');
//math.random 0 to 3
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  const disableEvents = () => {
    circles.forEach(circle => {
        circle.style.pointerEvents = "none";
    })
}
console.log(getRndInteger(0, 3))
//if i is not active(you push the wrong circle game ends)
const clickCircle = (i) => {
    if (i !== active) {
        return endGame();
    }
    //when clicked background changes
    disableEvents();
    circles[active].style.backgroundImage = 'url(reaction3.jpg)';
    rounds--;
    console.log('circle was clicked', i);
    score += 10;
    scoreDisplay.textContent = score + 'pts';
}
circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))
})
const enableEvents = () => {
    circles.forEach(circle => {
        circle.style.pointerEvents = "auto";
    })
}
const startGame = () => {
    //resetting emptycircle
circles[active].style.backgroundImage = '';
startButton.style.display = "none";
endButton.classList.remove('end')
endButton.classList.add('showEnd')
scoreDisplay.style.display = 'flex';
    if(rounds >= 3) {
        return endGame();
    }
    enableEvents();
    const newActive = pickNew(active);
    circles[newActive].classList.toggle('active');
    circles[active].classList.remove('active');
    timer = setTimeout(startGame, pace);
    active = newActive;
    pace -= 10;
    rounds++;
    function pickNew(active) {
        const newActive = getRndInteger(0,3);
        //newActive inside pickNew is different from startGame
        if (newActive !== active) {
            return newActive;
        }
            return pickNew(active);        
    }
    console.log(active);
}
const endGame = () => {
    startButton.style.removeProperty('display');
    endButton.classList.add('end');
    endButton.classList.remove('showEnd');
  /*   scoreDisplay.style.display = 'none'; */
    modal.style.display = 'flex';   
    const disableEvents = () => {
        circles.forEach(circle => {
            circle.style.pointerEvents = "none";
        })
    }
    disableEvents();
    console.log('game ended');
    clearTimeout(timer);
    finalScore.textContent = `You scored ${score} pts!`;
    if (score < 150) {
        feedBack.textContent = 'First time playing?';
    } else if (score >= 150 && score < 300) {
        feedBack.textContent = 'Good job!';
    } else if (score >= 300 && score < 350) {
        feedBack.textContent = 'Amazing skills!';
    } else if (score >= 350) {
        feedBack.textContent = 'Legendary! You have reached top rank. Congratulations!';
    }
}
const resetGame = () => {
window.location.reload();
}
startButton.addEventListener('click', startGame);
endButton.addEventListener('click', endGame);