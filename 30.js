const input=require("readline-sync");
let n=input.questionInt("enter the number");
sum=0;
for(let i=1;i<n;i++){
    if(n%i==0){
        sum=sum+i;
    }else{

    }
}
if(sum==n){
    console.log("yess");
}else{
    console.log("no");
}