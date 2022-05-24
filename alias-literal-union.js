"use strict";
function add(num1, num2, resultPhrase) {
    let result;
    if (typeof num1 === 'number' && typeof num2 == 'number' || resultPhrase == 'as-number') {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(add(20, 30, 'as-number'));
console.log('hello');
