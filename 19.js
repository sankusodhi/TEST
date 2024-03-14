const input=require("readline-sync");
let a=input.questionInt("enter the number");
let b=input.questionInt("enter the number");
let c=input.questionInt("enter the number");
let d=input.questionInt("enter the number");
var max;
var min;
var max1;
var min1;
var max2;
var min2;
var third;
if(a>b){
    max=a;
    min=b;
}else{
    max=b;
    min=a;
}if(c<d){
    max1=c;
    min1=d;
}else{
    max1=d;
    min1=c;
}if(max>max1){
    min2=max1;
}else{
    min2=max;
}if(min>min1){
    max2=min;
}else{
    max2=min1;
}if(max2>min2){
  third=min2;
}else{
    third=max2;
}
console.log(third);