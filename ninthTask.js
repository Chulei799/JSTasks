/*
Make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20

Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

felix.weight = 25;
felix.weight // 25
Cat.averageWeight(); // now 25

Throw an error if name or weight not specified when invoking the constructor.

Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
*/

class Cat {
    static _totalWeight = 0;
    static _catsCount = 0;

    constructor(name, weight) {
        if (!name) throw new Error('Name must be specified!');
        if (!weight) throw new Error('Weight must be specified!');
        if (/[^0-9.]/g.test(new String(weight))) throw new TypeError('Weight must be a number!');
        this.name = name;
        this._weight = +weight;
        this.constructor._totalWeight += +weight;
        this.constructor._catsCount++;
    }

    get weight() {
        return this._weight;
    }

    set weight(weight) {
        if (!weight) throw new Error('Weight must be specified!');
        if (/[^0-9.]/g.test(new String(weight))) throw new TypeError('Weight must be a number!');
        this.constructor._totalWeight -= this._weight;
        this.constructor._totalWeight += +weight;
        this._weight = +weight;
    }

    static averageWeight() {
        return this._totalWeight / this._catsCount;
    }
}

garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // 25

felix = new Cat('felix', 15);
console.log(Cat.averageWeight());   // now 20

felix.weight = 25;
felix.weight // 25
console.log(Cat.averageWeight()); // now 25
