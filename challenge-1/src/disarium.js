/**
 * @param {number} number integer as input 
 * @returns {boolean} true if the number is disarium and false if a number is not disarium.
 */

const IS_DISARIUM = (number) => { 
    // Making digits of a number
    const DIGITS = number.toString().split("")
    let digitToPowerSum = 0
    
    // Ensuring that digits isn't falsy.
    if(DIGITS) {
        
        // Summing up digits raised to powers respective of positions  
        DIGITS.forEach (
            digit => {
               digitToPowerSum += digit ** (DIGITS.indexOf(digit) + 1)
            }
        )
    }
    // Comparing the number to the digitToPowerSum
    return number === digitToPowerSum ? true : false;
}

console.log(IS_DISARIUM(89))

    