/*
Write a function that checks if two Strings are Anagrams. (“Thomas Edison”, “notes said ‘Ohm’“)
*/

function isAnagram(str1, str2) {
    str1 = [...str1.toLowerCase().replace(/[^a-z]/g, '')].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).toString();
    str2 = [...str2.toLowerCase().replace(/[^a-z]/g, '')].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).toString();
    return str1 === str2;
}

const str1 = "Thomas Edison", str2 = "notes said 'Ohm'";

console.log(isAnagram(str1, str2));
