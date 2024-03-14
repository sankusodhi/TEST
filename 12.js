const input=require("readline-sync");
let a=input.questionInt("enter the number");
let b=input.questionInt("enter the number");
let c=input.questionInt("enter the number");
str="";
if(a>b){
    if(a>b){
        str+=a;
    }else{
        str+=c;
    }
}else{
    if(b>c){
        str+=b;
    }
    else{
        str+=c;
    }
}
console.log(str);