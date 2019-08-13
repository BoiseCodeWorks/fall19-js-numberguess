let type = "Game"


let myObject = {
  type: `${type}`,
  title: "Hanabi",
  color: "purple",
  contents: ["instructions", "tokens", "cards"],
  height: "1 inch",
  width: "5 inches",
  length: "4 1/2 inches",
  players: [
    {
      name: "D$",
      score: -100
    },
    {
      name: "D4",
      score: 1000
    }
  ]
}




let playerOne = myObject.players[0]
let playerTwo = myObject.players[1]



// console.log(`The game is ${myObject.title}. \nPlayers: \nname:${playerOne.name}\nscore:${playerOne.score} \n\nname: ${playerTwo.name}\nscore: ${playerTwo.score}`)




// starting index is 0 length is one higher than the ending index
// let staff = ["D$", "Brittany", "Brooklyn", "Kenny", "Jake", "Mark"]
// let arr = ["new guy", "Zach", "Porter"]
// let i = staff.forEach(staffName => {
//   console.log(staffName)
// })
// console.log(i)

// for (let index = 0; index < staff.length; index++) {
//   let staffName = staff[index]
//   console.log(staffName)
// }




let num = 0

// while (num < 11) {
//   console.log(num)
//   num++
// }


// do {
//   console.log(num)
//   num++
// } while (false)




// prompt a user for a number between 1 and 10

function numberGuess() {
  //ask user for their guess and retain guess
  let guessedNumber = +prompt("Pick a number between 1 and 10")
  //pick a number 
  let number = Math.floor((Math.random() * 10) + 1)
  console.log(number)
  //see if guess matches the number
  let validNum = validateIsANumber(guessedNumber)
  if (validNum) {
    checkGuessVsNumber(guessedNumber, number)
  } else {
    alert("Pick an actual number.")
  }
}

numberGuess()

// take input and determine if it is a number

function checkGuessVsNumber(guess, numToCheck) {
  debugger
  if (numToCheck == guess) {
    alert("You are right!")
  } else if (guess > 10) {
    alert("Pick a number 10 or under.")
  } else if (guess < 1) {
    alert("Pick a number above 1.")
  }
  else {
    alert("You are WRONG!!!11")
  }
}

function validateIsANumber(input) {
  if (isNaN(input)) {
    return false
  }
  let type = typeof (input)
  switch (type) {
    case "number":
      return true
      break;
    default:
      return false
  }
}
