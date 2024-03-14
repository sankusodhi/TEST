const input=require("readline-sync");
let a=input.questionInt("enter");
let b=input.questionInt("enter");
let c=input.questionInt("enter");
let d=input.questionInt("enter");
let e=input.questionInt("enter");
let count=1;
if(a==b)
{
  count+=1;
  if(a==c)
  {
   count+=1;
   if(a==d)
   {
    {
        
    }count+=1;
    if(a==e)
    {
     count+=1;
    }else
    {
     if(a==d){
     count+=1;
      if(a==c)
      {
       count+=1;
       if(a==b)
       {
        count+=1;
       }
      }
     }
    }
   }else
   {
    if(a==b)
    {
     count+=1;
     if(a==c)
     {
      count+=1;
      if(a==e)
      {
       count+=1;
      }
     }
    }
   }
  }else
  {
   if(a==b)
   {
    count+=1;
    if(a==d)
    {
     count+=1;
     if(a==e)
     {
      count+=1;
     }
    }
   }
  }
}else
{
 if(a==c)
 {
  count+=1;
  if(a==d)
  {
   count+=1;
   if(a==e)
   {
    count+=1;
   }
  }
 }
}
console.log(a,"-",count);
let p=1;
if(b==a)
{

}else
{
    
 if(b==c)
 {
 p+=1;
 if(b==d)
 {
 p+=1;
 if(b==e)
 {
 p+=1;
 }
 }else
 {
 if(b==e)
 {
 p+=1;
 }
 }
 }else
 {
  if(b==d)
  {
  p+=1;
  if(b==e)
  {
   p+=1;
  }
  }
}
}
console.log(b,"-",p);
let q=1;
if(c==b)
{
}else
{
 if(c==a)
 {

 }else
 {
   
  if(c==d)
  {
  q+=1;
  if(c==e)
  {
  q+=1;
  }
  }
 }
}
console.log(c,"-",q);
let r=1;
if(d==c)
{

}else
{
 if(d==b)
 {

 }else
 {
  if(d==a)
  {

  }else
  {
    
   if(d==e)
   {
   r+=1;
   }
  }
 }
}
console.log(d,"-",r);
s=1;
if(e==d)
{

}else
{
 if(e==c)
 {

 }else
 {
 if(e==b)
 {

 }else
 {
 if(e==a)
 {

 }else
 {
   
 }
 } 

 }

 }
console.log(e,"-",s);
