const input=require("readline-sync");
let n=input.questionInt("enter the number");
let r;
sum=0;
while(n>0){
    r=n%10;
    n=Math.floor(n/10);
    sum=sum+r;
}
console.log(sum);