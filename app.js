const roll = document.getElementById('roll')
const dice = document.getElementById('dice')
const rollNo = document.getElementById('rollNo')
const rollHistory = document.getElementById('rollHistory')
const total = document.getElementById('total')
const reset = document.getElementById('reset')
let no = 0

function diceRoll() {
    let face = (Math.ceil(Math.random() * 6))
    rollNo.innerHTML = face
    rollHistory.innerHTML += rollNo.innerHTML + `+`
    const diceImage = 'dice' + face + '.png'
    document.querySelectorAll('img')[0].setAttribute('src', diceImage)
        return (face);
}

function gameReset() {
    no = 0
    rollNo.innerHTML = 0
    total.innerHTML = 0
    rollHistory.innerHTML = ''
    }


document.getElementById('roll').addEventListener('click', () => {

    no += diceRoll()
    total.innerHTML = no
    if (rollNo.innerHTML == 1) {
        gameReset()
        alert('Oh No!\nYou Rolled a 1!\nYou Lose!')
        } else if (total.innerHTML >= 20) {
        gameReset()
        alert('Congratulations!\nYou Got a Total of 20!')
    }
})

console.log(diceImage)