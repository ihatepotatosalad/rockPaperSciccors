const rockChoice = document.getElementById('rockChoice')
const paperChoice = document.getElementById('paperChoice')
const scissorsChoice = document.getElementById('scissorsChoice')
const userChoice = document.createElement('h1')
const computerChoice = document.createElement('h1')
const Thewinner = document.createElement('h1')
const winnerDiv = document.getElementById('winner')
function getUserChoice(userInput) {

    const computerPick = getComputerChoice()

    console.log(userInput)
    console.log(computerPick)

    // determineWinner(userInput, computerPick)
    userChoice.innerText = ('Player has selected: ' + userInput)
    winnerDiv.appendChild(userChoice)
    computerChoice.innerText = ('Computer has selected: ' + computerPick)
    winnerDiv.appendChild(computerChoice)
    Thewinner.innerText = (determineWinner(userInput, computerPick))
    winnerDiv.appendChild(Thewinner)
}
function main() {
    rockChoice.addEventListener('click', function () {
        getUserChoice('rock')

    })
    paperChoice.addEventListener('click', function () {
        getUserChoice('paper')

    })
    scissorsChoice.addEventListener('click', function () {
        getUserChoice('scissors')

    })
}
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
function determineWinner(userInput, computerPick) {
    if (userInput === computerPick) {
        return Thewinner.innerText = ("its a tie")
        //  console.log("its a tie");
    }
    if (userInput === "rock" && computerPick === "paper") {
        return Thewinner.innerText = ("computer won")
        //  console.log("computer won");
    } else if (userInput === "rock" && computerPick === "scissors") {
        return Thewinner.innerText = ("User Won")
        //  console.log("User Won");
    } else if (userInput === "paper" && computerPick === "scissors") {
        return Thewinner.innerText = ("computer won")
        //  console.log("computer Won");
    } else if (userInput === "paper" && computerPick === "rock") {
        return Thewinner.innerText = ("User Won")
        //  console.log("User Won");
    } else if (userInput === "scissors" && computerPick === "paper") {
        return Thewinner.innerText = ("User Won")
        //  console.log("User Won");
    } else if (userInput === "scissors" && computerPick === "rock") {
        return Thewinner.innerText = ("computer won")
        //  console.log("computer won");
    }
}
main()
// function playGame() {
//     let userChoice = getUserChoice('rock')
//     let computerChoice = getComputerChoice()
//     determineWinner(userChoice, computerChoice)
//     console.log(userChoice)
//     console.log(computerChoice)
// }
// playGame()