const input=require("readline-sync");
let n=input.questionInt("enter the number");
let m=input.questionInt("enter the number");
sum=0;
for(let i=n;n<=m;n++){
    sum=sum+n;
}
console.log(sum);