const values = ['rock','paper','scissors'];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const message = document.createElement('p');
document.body.appendChild(message);
let scorePlayer = 0;
let scoreComp = 0;


function computerPlay(){
    let computerValue = values[Math.floor(Math.random()*3)];
    return computerValue.toLowerCase();
    
}

function checkForWinner(){
    if(scorePlayer === 5){
        message.textContent='Player Wins!!!';
        scorePlayer = 0;
        scoreComp = 0;
    }
    if(scoreComp === 5){
        message.textContent='Computer Wins!!!';
        scorePlayer = 0;
        scoreComp = 0;
    }
}

function playRound(player){
    let comp = values[Math.floor(Math.random()*3)];
    console.log(player + "|" + comp);

    if((player === 'rock' && comp === 'scissors')||(player === 'scissors' && comp === 'paper')||(player === 'paper' && comp === 'rock')){
        scorePlayer++;
        message.textContent=`Player: ${scorePlayer} | Computer: ${scoreComp}`;

    }
    else if((player === 'rock' && comp === 'paper')||(player === 'scissors' && comp === 'rock')||(player === 'paper' && comp === 'scissors')){
        scoreComp++;
        message.textContent=`Player: ${scorePlayer} | Computer: ${scoreComp}`;
    }
    else console.log('Draw!');
    
    checkForWinner();

}

rock.addEventListener('click', function(){playRound('rock')});

paper.addEventListener('click', function(){playRound('paper')});

scissors.addEventListener('click', function(){playRound('scissors')});