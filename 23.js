const input=require("readline-sync");
let n=input.questionInt("enter the number");
var sum=0;
for(let i=1;i<=n;i++){
    if(i%2==0){

    }else{
        sum=sum+i;
    }
}console.log(sum);