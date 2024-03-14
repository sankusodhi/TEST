const input=require("readline-sync");
let a=input.questionInt("enter the number");
let b=input.questionInt("enter the number");
let c=input.questionInt("enter the number");
let d=input.questionInt("enter the number");
let max;
let max1;
if(a>b){
    max=a;
}else{
    max=b;
}if(c>d){
    max1=c;
}else{
    max1=d;
}if(max>max1){
    max=max;
}else{
    max=max1;
}
console.log(max);