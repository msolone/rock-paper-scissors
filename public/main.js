// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)




const choices = ['rock','paper','scissors']

const addMessageToList = (message) => {
  const newLi = document.createElement('li')
  newLi.textContent = message
  document.querySelector('.results').appendChild(newLi)
}

const removeMessageFromList = () => {
  const myList = document.getElementById('results')
  myList.innerHTML = ''
}


const p1_pick_rock = () => {
    // Set CPU choice
    const CPU_choice = choices[Math.floor(Math.random() * choices.length)]
    // Set p1 choice
    const p1_choice = "rock"
    console.log('Player 1s choice is ' + p1_choice)
    console.log('The CPU choice is ' + CPU_choice)
    // if else statement comparing p1 choice vs CPU choice
    if (CPU_choice === 'rock') {
    console.log('You tied, try again!')
    addMessageToList('You both chose rock, try again')
      } else {
        if (CPU_choice === 'scissors') {
          console.log('Rock beats Scissors, You win!')
          addMessageToList('Rock beats Scissors, You win!')
        } else {
          console.log('Paper beats Rock, You lose!')
          addMessageToList('Paper beats Rock, You lose!')
        }
      }
    }

document.querySelector('.rock').addEventListener('click', p1_pick_rock)


const p1_pick_scissors = () => {
  // Set CPU choice
  const CPU_choice = choices[Math.floor(Math.random() * choices.length)]
  // Set p1 choice
  const p1_choice = "scissors"
  console.log('Player 1s choice is ' + p1_choice)
  console.log('The CPU choice is ' + CPU_choice)
  // if else statement comparing p1 choice vs CPU choice
  if (CPU_choice === 'scissors') {
  console.log('You tied, try again!')
  addMessageToList('You both chose scissors, try again')
    } else {
      if (CPU_choice === 'paper') {
        console.log('Scissors beats Paper, You win!')
        addMessageToList('Scissors beats Paper, You win!')
      } else {
        console.log('Rock beats Scissors, You lose!')
        addMessageToList('Rock beats Scissors, You lose!')
      }
    }
  }
// When 'scissors' button is selected p1_pick_scissors is ran
document.querySelector('.scissors').addEventListener('click', p1_pick_scissors)




const p1_pick_paper = () => {
  // Set CPU choice
  const CPU_choice = choices[Math.floor(Math.random() * choices.length)]
  // Set p1 choice
  const p1_choice = "paper"
  console.log('Player 1s choice is ' + p1_choice)
  console.log('The CPU choice is ' + CPU_choice)
  // if else statement comparing p1 choice vs CPU choice
  if (CPU_choice === 'paper') {
  console.log('You tied, try again!')
  addMessageToList('You both chose paper, try again')
    } else {
      if (CPU_choice === 'rock') {
        console.log('Paper beats Rock, You win!')
        addMessageToList('Paper beats Rock, You win!')
      } else {
        console.log('Scissors beats Paper, You lose!')
        addMessageToList('Scissors beats Paper, You, lose!')
      }
    }
  }

document.querySelector('.paper').addEventListener('click', p1_pick_paper)













