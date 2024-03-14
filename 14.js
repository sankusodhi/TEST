const input=require("readline-sync");
let y=input.questionInt("enter the number");
if(y%400==0){
    if(y%100==0){
        console.log("Leap year");
    }
    else{
        console.log("Not leap year");
    }
}else{
    if(y%4==0){
        console.log("Leap year");
    }else{
        console.log("Not leap year");
    }
}