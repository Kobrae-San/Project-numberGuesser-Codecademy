let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 10)
}

function compareGuesses(userGuess, computerGuess, target) {
  if (userGuess > 9 || userGuess < 0) {
    alert("Your Number is out of range")
    return
  }
  if (getAbsoluteDistance(userGuess, target) === getAbsoluteDistance(computerGuess, target)) {
    return true
  } else if (getAbsoluteDistance(userGuess, target) < getAbsoluteDistance(computerGuess, target)) {
    return true
  } else {
    return false
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1
  } else if (winner === "computer") {
    computerScore +=1
  }
}

function advanceRound() {
  currentRoundNumber += 1
}

function getAbsoluteDistance(guess, target) {
  return Math.abs(guess - target)
}