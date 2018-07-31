// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)


// const rock_paper_scissors_dict = {
//   1: 'rock'
//   2: 'paper'
//   3: 'scissors'
// }

const choices = ['rock','paper','scissors']

const CPU_choice = choices[Math.floor(Math.random() * choices.length)]



const p1_pick_rock = () => {
    // Set p1 choice
    const p1_choice = "rock"
    console.log('Player 1s choice is ' + p1_choice)
    console.log('Player 1s choice is ' + CPU_choice)
    // if else statement comparing p1 choice vs CPU choice
    if (CPU_choice === 'rock') {
    console.log('You tied, try again!')
      } else {
        if (CPU_choice === 'scissors') {
          console.log('You win!')
        } else {
          console.log('You lose!')
        }
      }
    }

document.querySelector('.rock').addEventListener('click', p1_pick_rock)






const p1_pick_paper = () => {
  const p1_choice = "paper"
  console.log('Player 1s choice is ' + p1_choice)
}  

document.querySelector('.paper').addEventListener('click', p1_pick_paper)

const p1_pick_scissors = () => {
  const p1_choice = "scissors"
  console.log('Player 1s choice is ' + p1_choice)
}  

document.querySelector('.scissors').addEventListener('click', p1_pick_scissors)