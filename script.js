'use strict';
let score  =20;
const scoreBox = document.querySelector('.score')
console.log(scoreBox);
scoreBox.textContent = score;

let secretNumber= (Math.trunc(Math.random() * 20) +1);
console.log(secretNumber);
 const userInput = document.querySelector('.guess')
 console.log(userInput);
 const againbtn = document.querySelector('.again')

const checkButton = document.querySelector('.check ')
console.log(checkButton);
const victoryMessage = document.querySelector('.message')

checkButton.addEventListener('click',function(){
    const userGuess =Number(userInput.value)
    console.log(userGuess);
    if(score===0){
        return ;
    }else{

   
    if(userGuess=== secretNumber){
       // document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('body').style.backgroundColor='pink';
        victoryMessage.textContent ='🎉Correct Number!'
        document.querySelector('.highscore').textContent = score;
    }else if( userGuess < secretNumber){
        victoryMessage.textContent ='📉Too low!'
        score = score -1;
        scoreBox.textContent = score;
    }else{
        victoryMessage.textContent ='📈Too high!'
        score = score -1;
        scoreBox.textContent = score;
    }}

})
againbtn.addEventListener('click',function(){
    userInput.value = "";
    score = 20;
    scoreBox.textContent = score;
    victoryMessage.textContent= 'Start guessing...';
    secretNumber = Math.trunc((Math.random()*20)+1);
    document.querySelector('body').style.backgroundColor ='#222';
}
)

//console.log(Math.trunc(Math.random() * 20) +1);