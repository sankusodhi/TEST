const input=require("readline-sync");
let basicsalary=input.questionInt("enter the basicsalary");
str="";
if(basicsalary<=10000){
    HRA=(20/100)*basicsalary;
   DA=(80/100)*basicsalary;
   grosssalary=HRA+DA+basicsalary;
   str+=grosssalary;
}else{
    if(basicsalary<=20000){
         HRA=(25/100)*basicsalary;
         DA=(90/100)*basicsalary;
        grosssalary=HRA+DA+basicsalary;
        str+=grosssalary;
    }else{
        if(basicsalary>20000){
             HRA=(30/100)*basicsalary;
             DA=(95/100)*basicsalary;
            grosssalary=HRA+DA+basicsalary;
            str+=grosssalary;
        }
    }
}
console.log(str);