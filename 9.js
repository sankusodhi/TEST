const input=require("readline-sync");
let a=input.questionInt("enter the number");
var even,odd;
str="";
s=a%2;
if(s==0){
    str+="even";
}else{
    str+="odd";
}
console.log(str);