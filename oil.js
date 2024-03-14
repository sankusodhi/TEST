const input=require("readline-sync");
let n=input.questionInt("enter the number");
str="";
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        str+="*"
    }
    for(let j=i;j<=n-i;j++){
        str+="*";
    }
    for(let j=i;j<=n-i:j++){
        str+="*";
    }
    str+="\n";
}
console.log(str);