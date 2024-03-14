const input=require("readline-sync");
let a=input.questionInt("enter the number");
var even,odd;
s=a%2;
if(s==0){
    console.log("even");
}else{
    console.log("odd");
}