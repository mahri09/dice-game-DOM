const randomNum = () => Math.floor(Math.random() * 6) + 1;
console.log(randomNum())

const startButton = document.getElementById('start')

const dice1 = document.getElementById('dice_A')
const dice2 = document.getElementById('dice_B')

const player1 = document.getElementById('player_1');
const player2 = document.getElementById('player_2');

startButton.onclick = () => {
  const randomNum1 = randomNum();
  const randomNum2 = randomNum();

  dice1.src = 'images/dice'+ randomNum1 + '.png'
  dice2.src = 'images/dice'+ randomNum2 + '.png'

  if(randomNum1>randomNum2){
    document.querySelector('h1').innerHTML='player 1 wins'
    player1.className = 'player-win'
    player2.className = ''

} else if (randomNum1<randomNum2){
  document.querySelector('h1').innerHTML='player 2 wins'
  player2.className = 'player-win'
  player1.className = ''

}
else{
  document.querySelector('h1').innerHTML='Draw!'
  player1.className = ''
  player2.className = ''

}

}

