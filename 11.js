const input=require("readline-sync");
let n=input.questionInt("enter the number");
str="";
s=n%2;
if(s==0){
    str+=n;
}else{
    str+=n*2;
}
console.log(str);