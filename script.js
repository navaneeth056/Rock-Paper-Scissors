console.log("Hello WOrld");

function getComputerChoice(){
    let computerchoosen =  Math.floor(Math.random()*3);
    if(computerchoosen==0){
        return "Rock";
    }
    else if(computerchoosen==1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function game(playerSelection , computerchoice ){
    playerSelectionCaseSensitive = playerSelection.toUpperCase();

    if((playerSelectionCaseSensitive==="ROCK" && computerchoice === "Rock") || (playerSelectionCaseSensitive==="PAPER" && computerchoice === "Paper") || (playerSelectionCaseSensitive==="SCISSOR" && computerchoice === "Scissor") ){
        return "TIE";
    }
    else if((playerSelectionCaseSensitive==="ROCK" && computerchoice==="Paper")|| (playerSelectionCaseSensitive==="PAPER" && computerchoice==="Scissor") || (playerSelectionCaseSensitive==="SCISSOR" && computerchoice==="Rock")){
        return "You Lose! " +computerchoice+ " beats " + playerSelectionCaseSensitive+".";
    }
    else if((playerSelectionCaseSensitive==="ROCK" && computerchoice==="Scissor")|| (playerSelectionCaseSensitive==="PAPER" && computerchoice==="Rock") || (playerSelectionCaseSensitive==="SCISSOR" && computerchoice==="Paper")){
        return ("You Won!" +playerSelectionCaseSensitive+ " beats "+computerchoice+".");
    }
    else{
        return "Your only option is to choose rock paper or scissor";
    }

}

for(let i=0;i<5;i++){
    let computerchoice = getComputerChoice();
    let yourChoice = prompt("WHat is your choice rock paper or scissor");
    console.log(game(yourChoice,computerchoice));
}

//rock paper computer won
//rock scissorr i  won
// paper scissor computer won
//paper rock i won
// scissor paper i won
//scissor rock computer won