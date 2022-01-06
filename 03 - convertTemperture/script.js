"use strict"
// convert from Celsius to Fahrenheit.
const ctf = function (c) {
    return (c * (9/5)) + 32;
}
console.log(ctf(30));
console.log(ctf(-30));

// convert from Fahrenheit to Celsius.
function ftc(f) {
    return ((f - 32) * 5) / 9;
}
console.log(ftc(32));
console.log(ftc(50));
