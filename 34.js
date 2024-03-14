const input=require("readline-sync");
let n=input.questionInt("enter the number");
let arr=[n];
let a=input.questionInt("ss");
let i=0;
str="";
for(let i=0;i<n;i++){
    arr[i]=input.questionInt("enter the number");
}
console.log(arr);
while(i<n){
    if(arr[i]==a){
        // console.log("yes");
        str="yes";
        i = n;
    }else{
        // console.log("no");
        str="no";
    }
    i++;
}
if(str=="yes"){
    console.log(str);
} else{

    console.log(str);
}

