console.log("Hello")

// How to define user-defined function
// 1. Function decleration

function greeting1(){
    console.log("Hello")
}

greeting1();

function greeting2(name){
    //console.log("Hello "+name)
    console.log(`Hello ${name}`);
}

greeting2('Owen');
// can use ` to add paramaters
function greeting3(name){
    return `Hello ${name}`;
}

let message = greeting3('Tom');
console.log(message);

greeting2();
// Sum calculator with default values
function sum(num1=0, num2=0){
    return num1 + num2;
}
// Will work
console.log(sum(3,6))
// Will print Nan
console.log(sum(3))
// Will work but ignores 9
console.log(sum(3,6,9))

//2. Function Expression
let f1 = sum
// can declare variable as function
console.log(f1(7,9))
// Make constant variable function
const f2 = function(){
    return "Good Boy little puppy"
};
console.log(f2());

//3. Arrow function

const f3 = ()=> "Good Boy little puppy";

const f4 = (num1=0, num2=0)=> num1 + num2;
