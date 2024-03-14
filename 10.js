const input=require("readline-sync");
let n=input.questionInt("enter the number");
str="";
if(n==0){
    str+="zero";
}else{
    if(n>0){
        str+="positive";
    }else{
        str+="negitive";
    }
}
console.log(str);