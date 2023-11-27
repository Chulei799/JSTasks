class Calculator {
    constructor(number) {
        this.num = number;
    }

    add(number) {
        this.num += number;
        return this;
    }

    substract(number) {
        this.num -= number;
        return this;
    }

    multiply(number) {
        this.num *= number;
        return this;
    }
    
    divide(number) {
        this.num /= number;
        return this;
    }
}

let cal = new Calculator(3).add(2).add(4).divide(2);

console.log(cal);