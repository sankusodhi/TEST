const input=require("readline-sync");
let a=input.questionInt("enter the number")
let b=input.questionInt("enter the number");
quotient=Math.floor(a/b);
remainder=a%b;
console.log(quotient,remainder);