const input=require("readline-sync");
let u=input.questionInt("enter the number");
str="";
if(u<=50){
    amt=u*0.50;
    uc=amt*0.20;
    tc=amt+uc;
    str+=tc;
}else{
    if(u<=150){
        amt=25+(u-50)*0.75;
        cu=amt*0.20;
        tc=amt+uc;
        str+=tc;
    }
    else{
        if(u<=250){
        amt=100+(u-150)*1.20;
        uc=amt*0.20;
        tc=amt+uc;
        str+=tc;
        }
    }
}
console.log(str);