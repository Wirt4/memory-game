'use strict';
document.addEventListener('DOMContentLoaded', () => {
    //all that goes after is once the DOM is loaded
    //array of 12 penguin cards with names and image filepaths
    //question, do duplicates REALLY need to be hard-coded in this array?
    const cards = [
        {
            name: 'penguin by water',
            img: 'Images/penguin_by_water.jpg'
        },

        {
            name: 'penguin by water',
            img: 'Images/penguin_by_water.jpg'
        },

        {
            name: 'penguin cannibal',
            img: 'Images/penguin_cannibal.jpg'
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
            name: 'penguin on rocks',
            img: 'Images/penguin_on_rocks.jpg'
        },

        {
            name: 'penguin under water',
            img: 'Images/penugin_under_water.jpg'
        },
        {
            name: 'penguin under water',
            img: 'Images/penugin_under_water.jpg'
        },

        {
            name: 'penguin sign',
            img: 'Images/penguin_sign.jpg'
        },

        {
            name: 'penguin sign',
            img: 'Images/penguin_sign.jpg'
        },
        {
            name: 'penguin wide angle',
            img: 'Images/penguin_wide_angle.jpg'
        },
        {
            name: 'penguin wide angle',
            img: 'Images/penguin_wide_angle.jpg'
        }
    ]

    const grid = document.querySelector('.grid');
    //creating the board
    function createBoard(){
        for (let i=0;i< cards.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'Images/card_back.jpg')
            card.setAttribute('data-id', i);
           // card.addEventListener('click', flipCard)
           grid.appendChild(card)
        }
    }

    createBoard()
})