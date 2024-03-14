const input=require("readline-sync");
let n=input.questionInt("enter the number");
let p=1;
for(let i=1;i<=n;i++){
     if(n%i==0){
        p=p*i;
        }  
     else  
     {

     }
}
if(p===n){
    console.log("yes");
}else{
    console.log("no");
}
