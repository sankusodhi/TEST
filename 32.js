const input=require("readline-sync");
let n=input.questionInt("enter the number");
let arr=[n];
for(let i = 0; i < n;i++){
    arr[i] = input.questionInt("enter the number");
    
}

console.log(arr);