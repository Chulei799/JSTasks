/*
Given this input: “3[as2[df]]2[gh]” you have to generate an output string: “asdfdfasdfdfasdfdfghgh”
*/

function generateStr(str) {
    console.log("Input => " + str);

    while(str.indexOf('[') >= 0 && str.indexOf(']') >= 0) {
        let indexes = getIndexes(str);
        str = cutStr(str, indexes[0], indexes[1]);
        if (str.indexOf('[') < 0 && str.indexOf(']') < 0) break;
        console.log("Interim output => " + str);
    }

    console.log("Output => " + str);
    return str;
}

function cutStr(str, startIndex, endIndex) {
    let result = [];
    result[0] = str.substring(0, startIndex);
    result[1] = str.substring(startIndex + 1, endIndex);
    result[2] = str.substring(endIndex + 1);
    result[3] = "";
    for (let i = startIndex - 1; i >= 0; i--) {
        if (/[0-9]/.test(str.charAt(i))) {
            result[3] += str.charAt(i);
        } else {
            break;
        }
    }
    result[3] = [...result[3]].reverse().join('');
    result[0] = result[0].substring(0, result[0].length - result[3].length);
    return result[0] + result[1].repeat(parseInt(result[3])) + result[2];
}

function getIndexes(str) {
    let indexes = [];
    if (str.indexOf('[') == 0 || str.indexOf(']') == 0) {
        indexes[0] = -1;
        indexes[1] = -1;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == '[') {
                indexes[0] = i;
            }
            if (str.charAt(i) == ']') {
                indexes[1] = i;
                break;
            }
        }
    }
    return indexes;
}

const str = "3[as2[df]]2[gh]";

console.log(generateStr(str));
