const cardArray = [
	{
		name: 'fries',
		img: './img/fries.png'
	},
	{
		name: 'cheeseburger',
		img: './img/cheeseburger.png'
	},
	{
		name: 'hotdog',
		img: './img/hotdog.png'
	},
	{
		name: 'ice-cream',
		img: './img/ice-cream.png'
	},
	{
		name: 'milkshake',
		img: './img/milkshake.png'
	},
	{
		name: 'pizza',
		img: './img/pizza.png'
	},
	{
		name: 'fries',
		img: './img/fries.png'
	},
	{
		name: 'cheeseburger',
		img: './img/cheeseburger.png'
	},
	{
		name: 'hotdog',
		img: './img/hotdog.png'
	},
	{
		name: 'ice-cream',
		img: './img/ice-cream.png'
	},
	{
		name: 'milkshake',
		img: './img/milkshake.png'
	},
	{
		name: 'pizza',
		img: './img/pizza.png'
	},
]

cardArray.sort(() => 0.5 - Math.random()) /* for arr shaffeling  */
console.log(cardArray)

const btn = document.querySelector('button')
const gridOutput = document.querySelector('#grid')
const resultOutput = document.querySelector('#result')
let cardsChoisen = []
let cardschoisenIds = []
const cardsWon = []

btn.addEventListener('click', resetGame)

function resetGame() {
	document.location.reload()
}

createBoard()

function createBoard() {


	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement('img')
		card.src = 'img/blank.png'
		card.id = i
		card.addEventListener('click', flipCard)
		gridOutput.append(card)
	}

}

function flipCard() {

	const cardId = this.id
	cardsChoisen.push(cardArray[cardId].name)
	cardschoisenIds.push(cardId)
	this.src = cardArray[cardId].img

	if (cardsChoisen.length === 2) {
		setTimeout(checkMatch, 100)
	}
}

function checkMatch() {
	const cards = document.querySelectorAll('img')
	const optionOneId = cardschoisenIds[0]
	const optionTwoId = cardschoisenIds[1]


	console.log('Check for a match!!')

	if (optionOneId == optionTwoId) {
		cards[optionOneId].src = 'img/blank.png'
		cards[optionTwoId].src = 'img/blank.png'
		alert('You have clicked the same image!')
	} else if (cardsChoisen[0] == cardsChoisen[1]) {
		alert('You found a match!!')
		cards[optionOneId].src = 'img/white.png'
		cards[optionTwoId].src = 'img/white.png'
		cards[optionOneId].removeEventListener('click', flipCard)
		cards[optionTwoId].removeEventListener('click', flipCard)

		cardsWon.push(cardsChoisen)
		resultOutput.textContent = cardsWon.length

	} else {
		cards[optionOneId].src = 'img/blank.png'
		cards[optionTwoId].src = 'img/blank.png'
		alert('Try again!!')
	}

	cardsChoisen = []
	cardschoisenIds = []


	if (cardsWon.length == (cardArray.length / 2)) {
		resultOutput.textContent = 'You win!!'
	}
}

