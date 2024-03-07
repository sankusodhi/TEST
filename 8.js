const input=require("readline-sync");
let n=input.questionInt("enter the number");
let arr=[];
for(let i=0;i<n;i++)
{
 arr[i]=input.questionInt("enter");
}
console.log(arr);
let sum=0;


for(let i=0;i<n;i++)
{
sum=sum+arr[i];
}

sum=sum/n;
console.log(sum);