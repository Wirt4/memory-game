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
        },
        {
            name: 'baby penguin',
            img: 'Images/penguin_baby.jpg'
        },
        {
            name: 'penguin jumping',
            img: 'Images/penguin_jumping.jpg'
        },
        {
            name: 'penguins in snow',
            img: 'Images/penguins_in_snow.jpg'
        },
        {
            name: 'penguins looking up',
            img: 'Images/penguins_looking_up.jpg'
        },
        {
            name: 'rockhopper penguins',
            img: 'Images/penguins_rockhoppers.jpg'
        },
        {
            name: 'baby penguin',
            img: 'Images/penguin_baby.jpg'
        }
    ]


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const subtitle = document.querySelector('#message')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    const cardBack = 'Images/card_back.jpg'
    const noCard = 'Images/blank.png'
    const bomb = "game over, bomb"
    const bombCard = { name: bomb, img: 'Images/bomb.jpg' }
    const scorePreface = "Pretty Penguins Picked: "
    var cardSelected = false;

    //doubles the cards in the card array, shuffles it
    function prepareCardArray() {
        let arrayCopy = cardArray.map(x => x);
        cardArray = cardArray.concat(arrayCopy);
        cardArray.push(bombCard)
        cardArray.sort(() => 0.5 - Math.random())
    }
    //sets the surface of a card to it's image source
    function setCard(card, imgSrc) {
        card.setAttribute('src', imgSrc)
    }

    //create your board
    function createBoard() {
        prepareCardArray()
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            setCard(card, cardBack)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        resultDisplay.textContent = scorePreface
    }

    //removes the click event listent from a chard
    function deactivate(card) {
        card.removeEventListener('click', flipCard)
    }

    // any surface that is not white is set to a card back
    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            setCard(cards[optionOneId], cardBack)
            setCard(cards[optionTwoId], cardBack)
            //alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            setCard(cards[optionOneId], noCard)
            setCard(cards[optionTwoId], noCard)

            deactivate(cards[optionOneId])
            deactivate(cards[optionTwoId])
            cardsWon.push(cardsChosen)
        } else {
            setCard(cards[optionOneId], cardBack)
            setCard(cards[optionTwoId], cardBack)
            //alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = scorePreface.concat('', (2 * cardsWon.length).toString())
        if (cardsWon.length === Math.floor(cardArray.length / 2)) {
            resultDisplay.textContent = 'Congratulations! You picked all the pretty penguins!'
            //switch remaining card back with flag image here
            killAll()
        }
    }

    //removes event listeners from all cards
    function killAll() {
        const cards = document.querySelectorAll('img')
        for (let i = 0; i < cards.length; i++) {
            deactivate(cards[i])
        }

    }

    //flickers screen for a half second
    function flashScreen() {
        //possibly play sound FX
        document.body.style.backgroundColor = "black";
        document.getElementById('result').style.color = 'white';
        document.getElementById('message').style.color = 'white';

    }

    //flip your card
    function flipCard() {
        if (!cardSelected) {
            cardSelected=true
            gameOver = false
            let cardId = this.getAttribute('data-id')
            this.setAttribute('src', cardArray[cardId].img)
            if (cardArray[cardId] === bombCard) {
                subtitle.textContent += "Game Over: You Stepped in Penguin Poop"
                gameOver = true
                killAll()
                flashScreen()
            }
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            if (cardsChosen.length === 2 && !gameOver) {
                setTimeout(checkForMatch, 500)
            }
            cardSelected = false;
        }

    }

    createBoard()
})