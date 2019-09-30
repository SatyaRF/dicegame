/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//State variable tells us the state of program/system


let scores, roundScore, activePlayer, gamePlaying;

init();


// let x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.btn-roll').addEventListener('click',callDice,false);

document.querySelector('.btn-hold').addEventListener('click',clickHold,false);

document.querySelector('.btn-new').addEventListener('click',init,false);

// document.querySelector('.btn-roll').addEventListener('click',function(){
//     //Anonymous function
// },false);

//Function Roll Dice 
function callDice(){

    if(gamePlaying){
        let dice = Math.floor((Math.random()*6)+1);

        let diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        
        diceDOM.src = `dice-${dice}.png`
        
        //Game Logic
        if(dice === 1){
            nextPlayer();
        }else{
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
            }
        }
        
}



//Function HoldButton
function clickHold(){

    if(gamePlaying){
        scores[activePlayer] += roundScore;

    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    if(scores[activePlayer] >=20){
        document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        gamePlaying = false;
    }else{
        nextPlayer();
    }
    
    }
}


function nextPlayer(){

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

}




function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector(`#name-0`).textContent = 'Player 1';
    document.querySelector(`#name-1`).textContent = 'Player 2';
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
}
