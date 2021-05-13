document.addEventListener('DOMContentLoaded', () => {
    //card options
    var cardArray = [
        {
            name: 'penguin by water',
            img: 'Images/penguin_by_water.jpg'
        },
        {
            name: 'penguin cannibal',
            img: 'Images/penguin_cannibal.jpg'
        },
        {
            name: 'penguin on rocks',
            img: 'Images/penguin_on_rocks.jpg'
        },
        {
            name: 'penguin sign',
            img: 'Images/penguin_sign.jpg'
        },
        {
            name: 'penguin under water',
            img: 'Images/penguin_under_water.jpg'
        },
        {
            name: 'penguin wide angle',
            img: 'Images/penguin_wide_angle.jpg'
        }
    ]

   // cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function doubleArray(){
        const arrayCopy = cardArray.map(x => x);
        cardArray = cardArray.concat(arrayCopy);
    }
    //create your board
    function createBoard() {
        doubleArray()
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'Images/card_back.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'Images/card_back.jpg')
            cards[optionTwoId].setAttribute('src', 'Images/card_back.jpg')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'Images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'Images/white.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'Images/card_back.jpg')
            cards[optionTwoId].setAttribute('src', 'Images/card_back.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})