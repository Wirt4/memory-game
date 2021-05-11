//remember need to import {function header} from "./scriptsrc";
import{doubleArray} from '../memory.js'
describe("doubleArray test", () => {

  test("description of function test", () => {
    const cards = [
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
          name: 'penguin under water',
          img: 'Images/penugin_under_water.jpg'
      },

      {
          name: 'penguin sign',
          img: 'Images/penguin_sign.jpg'
      },

      {
          name: 'penguin wide angle',
          img: 'Images/penguin_wide_angle.jpg'
      },
      
  ]

  const ans = [
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
    expect(doubleArray(cards)).toEqual(ans);
  });
});
