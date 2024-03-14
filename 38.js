const input=require("readline-sync");
let n=input.questionInt("enter the number");
let arr=[n];
str="";
for(let i=0;i<n;i++){
    arr[i]=input.questionInt("enter");
}


for(let j=0;j<n;j++)
{
    for(let i=1;i<=arr[j];i++)
    {
      str+=">";
    }
    str+="\n";
}
console.log(arr);
console.log(str);