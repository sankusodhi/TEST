const input=require("readline-sync");
let n=input.questionInt("enter the number");
var even;
for(let i=1;i<n;i++){
    if(i%2==0){
        console.log(i);
    }
}