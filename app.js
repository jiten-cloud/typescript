"use strict";
function con(n1, n2) {
    return n1 + n2;
}
function create(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}
function result(num) {
    console.log(num);
}
let combinevalues;
combinevalues = con;
console.log(combinevalues(3, 1));
const button = document.querySelector(".click");
const clickHandler = (message) => {
    console.log("hello my world is here " + message);
};
button.addEventListener('click', clickHandler.bind(this, "jitender"));
