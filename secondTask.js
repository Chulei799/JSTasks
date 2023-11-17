/*
Create a function that receives a String as a parameter and return True or False if the String is a Pangram.
(“The quick brown fox jumps over the lazy dog”).
*/

function isPangram(str) {
    const letters = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
    ]
    return letters.toString() == [...(new Set([...str.toLowerCase().replaceAll(' ', '')]))].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).toString();
}

const pangram = "The quick brown fox jumps over the lazy dog";

console.log(isPangram(pangram));
