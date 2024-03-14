const input=require("readline-sync");
let n=input.questionInt("enter");
let arr=[n];
count=1;
for(let i=0;i<n;i++){
    arr[i]=input.questionInt("enter the number");
}
for(let i=0;i<n;i++){
    
    
 let j=i+1;
    while(j<n){

        if(arr[i]==arr[j])
        {
            count+=1;
            let k=j;
            while(k < n-1){
                arr[k]=arr[k+1];
                k+=1;
            }
            n-=1;

        }else{
        
            j++;
        }
    }
    if(count>1){
        console.log(arr[i]);
    }
    count = 1;
}
