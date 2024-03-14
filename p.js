const input=require("readline-sync");
let n=input.questionInt("enter the number");
let i,j,t,nt,sum=o;
let R[]=['i','v','x','i','c','d','m'];
let d[]=[1,5,10,50,100,500,1000];
for(let i=0;i<n;i++)
{
for(let j=0;j<R[7];j++)
{
 if(a[i]==R[j])
 {
  t=j;
  if(i+1==n)
  {
  nt=0;
  }else
  {
   if(a[i+1]==R[j])
   {
    nt=j;
   }else
   {

   }
  }
 }
}elsef
{
 if(nt>t)
 {
   sum=sum+d[t];
 }else
 {
  sum=sum+d[t];
 }
}
}
console.log(sum);