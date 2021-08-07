/**
 * 
 * @param {string} string - Takes in a string 
 * @returns {boolean} 'true' if a string is a palindrome and returns 'false' if a string is not a palindrome.
 */

const IS_PALINDROME = (string) => {
    return string === string.split("").reverse().join("") ? true : false;
}

// module.exports = IS_PALINDROME