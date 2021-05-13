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


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    const cardBack = 'Images/card_back.jpg'
    const noCard = 'Images/white.jpg'

    //doubles the cards in the card array, shuffles it
    //maybe add "bomb" card
    function prepareCardArray(){
        const arrayCopy = cardArray.map(x => x);
        cardArray = cardArray.concat(arrayCopy);
        cardArray.sort(() => 0.5 - Math.random())
    }
    //sets the surface of a card to it's image source
    function setCard(card, imgSrc){
        card.setAttribute('src', imgSrc)
    }

    //create your board
    function createBoard() {
        prepareCardArray()
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
           // card.setAttribute('src', cardBack)
            setCard(card, cardBack)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //removes the click event listent from a chard
    function deactivate(card){
        card.removeEventListener('click', flipCard)
    }
    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            setCard(cards[optionOneId], cardBack)
            setCard(cards[optionTwoId], cardBack)
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            setCard(cards[optionOneId], noCard)
            setCard(cards[optionTwoId], noCard)
            deactivate(cards[optionOneId])
            deactivate(cards[optionTwoId])
            //cards[optionOneId].removeEventListener('click', flipCard)
            //cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            setCard(cards[optionOneId], cardBack)
            setCard(cards[optionTwoId], cardBack)
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