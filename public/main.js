// const main = () => {
//   document.querySelector('h1').textContent += '?'
// }

// document.addEventListener('DOMContentLoaded', main)





const p1_pick_rock = () => {
    const p1_choice = "Rock"
    console.log('Player 1s choice is ' + p1_choice)
}  

document.querySelector('.rock').addEventListener('click', p1_pick_rock)

const p1_pick_paper = () => {
  const p1_choice = "Paper"
  console.log('Player 1s choice is ' + p1_choice)
}  

document.querySelector('.paper').addEventListener('click', p1_pick_paper)

const p1_pick_scissors = () => {
  const p1_choice = "scissors"
  console.log('Player 1s choice is ' + p1_choice)
}  

document.querySelector('.scissors').addEventListener('click', p1_pick_scissors)