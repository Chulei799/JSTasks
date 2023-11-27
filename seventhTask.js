/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

getMiddle("test") should return "es"

getMiddle("testing") should return "t"

getMiddle("middle") should return "dd"

getMiddle("A") should return "A"
*/

function getMiddle(word) {
    if (word) {
        word = new String(word);
        let startIndex = word.length % 2 === 0 ? word.length / 2 - 1 : word.length / 2 ;
        return word.substring(startIndex, word.length / 2  + 1);
    } else {
        throw new Error('Word should not be null, undefined or empty');
    }
}

console.log(getMiddle("test"));

console.log(getMiddle("testing"));

console.log(getMiddle("middle"));

console.log(getMiddle("ava"));

console.log(getMiddle("little"));

console.log(getMiddle("A"));
