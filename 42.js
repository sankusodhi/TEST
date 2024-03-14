const input=require("readline-sync");
let n=input.questionInt("enter the number");
str="";
if(n==1)
{
str="no";
}else if(n==2)
{
str="yes";
}else 
str="yes";



if(n%2==0)
{
 str="no";
}else
str="yes";




 if(n==3)
{
 str="yes";
}else if(n%3==0)
 {
 str="no";
 }else if(n%4==0)
{
str="no";
}else
str="yes";


 if(n==5)
{
str="yes";
}else 
str="yes";


if(n%5==0)
{
 str="no";
}else 
str="yes";


if(n==7)
{
str="yes";
}else 
str="yes";


if(n%7==0)
{
str="no";
}


console.log(str);