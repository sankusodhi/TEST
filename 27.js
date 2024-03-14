const input=require("readline-sync");
let n=input.questionInt("enter the number");
let rev=0;
while(n>0){
    r=n%10;
    n=Math.floor(n/10);
    rev=rev*10+r;
}
console.log(rev);