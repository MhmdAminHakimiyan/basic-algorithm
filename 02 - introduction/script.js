"use strict"

const names = []
const introduction = function(firstName,lastName){

    names.push(`${firstName} ${lastName}`);
    return `Hi, My Name is ${firstName} ${lastName}.`
}

console.log(introduction("ali", "rezaei"));
console.log(introduction("sajad", "hashemi"));
console.log(names);
