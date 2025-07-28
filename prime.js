function isprime(num1,num2){
    for(let n=num1;n<=num2;n++){
    if(n===1){
      continue;
    }
      let isprime=true;
    for(let i =2;i<=Math.sqrt(n);i++){
        if(n%i==0){
        isprime=false;
        break;
        }       
        }  
         if(isprime){
            console.log(`${n} is a prime`);
    }
    }   
}
isprime(2,11);
