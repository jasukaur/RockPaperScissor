let userScore = 0;
let computerScore = 0;

const userScorePara = document.getElementById('user-score');
const computerScorePara = document.getElementById('comp-score');

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const draw = () => {
    console.log('Game draw');
    msg.innerHTML = 'Game draw';
}   

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        console.log('User win');
        msg.innerHTML = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else{
        computerScore++;
        computerScorePara.innerHTML = computerScore;
        console.log('Computer win');
        msg.innerHTML = `Computer wins! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}
const playGame = (userChoice) => {
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);

    if (userChoice === computerChoice) {
        draw();
    }
    else{
        let userWin= true;

        if (userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }
}


choices.forEach((choice) => {
  choice.addEventListener('click', ()=>{
    const userChoice = choice.id;
    playGame(userChoice);
  });

});
