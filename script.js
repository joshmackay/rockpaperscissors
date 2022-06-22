const values = ['rock','paper','scissors'];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let resetFlag = false;

const playerCountMessage = document.querySelector('#player-score-display');
const compCountMessage = document.querySelector('#comp-score-display');

let scorePlayer = 0;
let scoreComp = 0;

function computerPlay(){
    let computerValue = values[Math.floor(Math.random()*3)];
    return computerValue.toLowerCase();
    
}

function checkForWinner(){
    resetFlag = true;
    if(scorePlayer === 5){
        playerCountMessage.textContent='Player Wins!!!';
    }
    if(scoreComp === 5){
        compCountMessage.textContent='Computer Wins!!!';
    }
    // while(resetFlag===true){

    // }

}

function resetGame(){
    resetFlag = false;
    scorePlayer = 0;
    scoreComp = 0;
    playerCountMessage.textContent=`${0}`;
    compCountMessage.textContent=`${0}`;
}

function playRound(player){
    let comp = values[Math.floor(Math.random()*3)];
    console.log(player + "|" + comp);

    if(
        (player === 'rock' && comp === 'scissors')||
        (player === 'scissors' && comp === 'paper')||
        (player === 'paper' && comp === 'rock'))
        {
            scorePlayer++;
            playerCountMessage.textContent=`${scorePlayer}`;
        }
    else if(
        (player === 'rock' && comp === 'paper')||
        (player === 'scissors' && comp === 'rock')||
        (player === 'paper' && comp === 'scissors'))
        {
            scoreComp++;
            compCountMessage.textContent=`${scoreComp}`;
        }
    else console.log('Draw!');
    
    checkForWinner();

}
resetGame();

rock.addEventListener('click', function(){playRound('rock')});
paper.addEventListener('click', function(){playRound('paper')});
scissors.addEventListener('click', function(){playRound('scissors')});
reset.addEventListener('click', resetGame);
