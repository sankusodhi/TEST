const input=require("readline-sync");
let n=input.questionInt("enter the number");
sum=0;
for(let i=1;i<=n;i++){
    sum=sum+1/i;
}
console.log(sum);