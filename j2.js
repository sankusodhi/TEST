const input=require("readline-sync");
let a=input.questionInt("enter the number");
let b=input.questionInt("enter the number");
T=a+b;
a=T-a;
b=T-b;

//let [...a,b] = b,a;
console.log(a,b);