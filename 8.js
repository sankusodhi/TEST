const input=require("readline-sync");
let a=input.questionInt("enter the number");
let b=input.questionInt("enter the number");

if(a>b){
    greater=a;
}else{
    greater=b;
}
console.log(greater);