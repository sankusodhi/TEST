const input=require("readline-sync");
let n=input.questionInt("enter the number");
let arr=[n];
for(let i=0;i<n;i++){
    arr[i]=input.questionInt("enter the number");
}
console.log(arr);
let m=input.questionInt("enter the number");
let brr=[m];
for(let i=0;i<m;i++){
    brr[i]=input.questionInt("enter the number");
}
console.log(brr);
let crr=[n+m];
for(i=0;i<(n+m);i++){
    crr=arr.concat(brr);
}
console.log(crr);