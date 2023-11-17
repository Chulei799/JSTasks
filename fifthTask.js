/*
Given this input: “3[asdf]” you have to generate an output string: “asdfasdfasdf”
*/

function generateStr(str) {
    return str.substring(str.indexOf('[') + 1, str.indexOf(']')).repeat(+str.substring(0, str.indexOf('[')));
}

const str = "3[asdf]";

console.log(generateStr(str));
