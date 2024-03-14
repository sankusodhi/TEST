const input=require("readline-sync");
let n=input.questionInt("enter the number");
count=0;
while(n>0){
    r=n%10;
    n=Math.floor(n/10);
    count+=1;
}
console.log(count);