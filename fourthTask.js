/*
Create a class Person and create 3 objects with name, age and address (Names: John, Anna, Rocky, Aviva).
Assign those 3 objects into an array and sort them by descending age.
Then create a function that will receive the array of objects as argument and return an array of boolean depending on
if the name is a palindrome or not (Expected result: [John: false, Anna: true, Rocky: false, Aviva: true]).
*/

class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

const obj1 = new Person("John", 21, "Main str. 190"),
    obj2 = new Person("Anna", 22, "Victory str. 21"),
    obj3 = new Person("Rocky", 40, "Shadow str. 1"), 
    obj4 = new Person("Aviva", 34, "Byron str. 5");

const arr = [obj1, obj2, obj3, obj4];

arr.sort((a, b) => {return b.age - a.age});

console.log(arr);

function isPalindrome(arr) {
    return arr.map((cur) => {
        let name = cur.name.toLowerCase();
        return name == [...name].reverse().join('');
        });
}

console.log(isPalindrome(arr));
