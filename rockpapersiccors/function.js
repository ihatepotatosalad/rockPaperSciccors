const getUserChoice = (userInput) => {
    userInput = userInput;
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors"
    ) {
        return userInput;
    } else {
        console.log("error");
    }
};
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return console.log("its a tie");
    }
    if (userChoice === "rock" && computerChoice === "paper") {
        return console.log("computer won");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return console.log("User Won");
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        return console.log("computer Won");
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return console.log("User Won");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return console.log("User Won");
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        return console.log("computer won");
    }
}
function playGame() {
    let userChoice = getUserChoice('rock')
    let computerChoice = getComputerChoice()
    determineWinner(userChoice, computerChoice)
    console.log(userChoice)
    console.log(computerChoice)
}
playGame()