/**
 * @param {number} input -can be anything of datatype number in JavaScript. 
 * @returns {boolean} -true if the number is disarium and false if a number is not disarium.
 */

const IS_DISARIUM = (input) => { 
    // Making digits of a number
    const DIGITS = ("" + input).split("")
    let number = 0
    // Summing up digits raised to powers respective of positions  
    DIGITS.forEach (
        digit => {
        number += digit ** (DIGITS.indexOf(digit) + 1)
        }
    )

    // Comparing the input with the number
    return input === number ? true : false;
}

// Uncomment the line below to run the tests 
// module.exports = IS_DISARIUM

    