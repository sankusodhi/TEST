const input=require("readline-sync");
let n=input.questionInt("enter the number");
let arr=[n];
for(let i = 0; i < n;i++){
    arr[i] = input.questionInt("enter the number");
    
}
console.log(arr);
// for(let i=n-1;i>=0;i--){
//     console.log(arr[i]);
// }
let i=n-1;
while(i>=0){
    console.log(arr[i]);
    i--;
}