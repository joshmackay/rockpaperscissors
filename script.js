const values = ['rock','paper','scissors'];

function computerPlay(){
    let computerValue = values[Math.floor(Math.random()*3)];
    return computerValue.toLowerCase();
    
}

function playerPlay(){
    let playerValue = prompt('Choose...');
    return playerValue.toLowerCase();
}

function playRound(comp, player){
    console.log(player + "|" + comp);

    if((player === 'rock' && comp === 'scissors')||(player === 'scissors' && comp === 'paper')||(player === 'paper' && comp === 'rock')){
        console.log('Player wins this round!');
        return 'player';
    }
    else if((player === 'rock' && comp === 'paper')||(player === 'scissors' && comp === 'rock')||(player === 'paper' && comp === 'scissors')){
        console.log('Computer wins this round!')
        return 'comp';
    }
    else console.log('Draw!');

}

function game(){
    let playerScore = 0;
    let compScore = 0;

    for(let i= 1; i<=5; i++){
        let rollComputer = computerPlay();
        let rollPlayer = playerPlay();
        let result = playRound(rollComputer, rollPlayer);
        if(result == 'player'){
            playerScore++;
        } else if(result == 'comp'){
            compScore++;
        } else {
            continue;
        }    
    }

    console.log(playerScore + ' ' + compScore);
    
    if(playerScore > compScore){
        console.log("Player Wins!");
    }else if(compScore > playerScore){console.log('Comp Wins!')}
    else console.log('It is a draw!');
}

game();