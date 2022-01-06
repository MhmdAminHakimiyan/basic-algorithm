"use strict"


const fizzBuzz = function (num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return "";
    }
}


console.log(fizzBuzz(3)); 
console.log(fizzBuzz(5));
console.log(fizzBuzz(15)); 
console.log(fizzBuzz(8)); 


function fizzBuzz2(num) {
    
    return num%3 ===0 && num %5 === 0 ? "fizzbuzz" : num%3 ===0 ? "fizz" : num %5 === 0 ? "buzz" : ""
}

console.log(fizzBuzz2(3)); 
console.log(fizzBuzz2(5));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(8)); 


