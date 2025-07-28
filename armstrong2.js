function arm(num){
    const digit=num.toString().split('');
    const power=digit.length;
    const result = digit.reduce((acc,digit)=>acc+Math.pow(parseInt(digit),power),0);
    if(result===num){
        console.log(`${num} is armstrong`);
    }
    else{
        console.log(`${num} is not armstrong`);
    }
}
arm(153);
arm(121);