const computerChoiceOutput = document.querySelector('#computer-choice'),
	userChoiceOutput = document.querySelector('#user-choice'),
	resultOutput = document.querySelector('#result'),
	choicesBtns = document.querySelectorAll('button')
let userChoice, computerChoice, result

choicesBtns.forEach(btn => btn.addEventListener('click', (e) => {
	userChoice = e.target.id
	userChoiceOutput.innerHTML = userChoice
	generateComputerChoice()
	getResult()
}))

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * choicesBtns.length) + 1
	if (randomNumber === 1) {
		computerChoice = 'rock'
	}
	if (randomNumber === 2) {
		computerChoice = 'scissors'
	}
	if (randomNumber === 3) {
		computerChoice = 'paper'
	}
	computerChoiceOutput.innerHTML = computerChoice
}

function getResult() {
	if (computerChoice === userChoice) {
		result = 'its a draw!'
	}
	if (computerChoice === 'rock' && userChoice === 'paper') {
		result = 'You win'
	}
	if (computerChoice === 'rock' && userChoice === 'scissors') {
		result = 'You lost'
	}
	if (computerChoice === 'paper' && userChoice === 'rock') {
		result = 'You lost'
	}
	if (computerChoice === 'paper' && userChoice === 'scissors') {
		result = 'You win'
	}
	if (computerChoice === 'scissors' && userChoice === 'rock') {
		result = 'You win'
	}
	if (computerChoice === 'scissors' && userChoice === 'paper') {
		result = 'You lost'
	}
	resultOutput.innerHTML = result
}