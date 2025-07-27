function arm(num){
    const digit =num.toString().split('');
    const order=digit.length;
    const sum = digit.reduce(
        (acc,digit)=>acc+Math.pow(parseInt(digit),order),0);
    if (sum === num) {
        console.log(
            num + " is an Armstrong Number");
    }
    else {
        console.log
            (num + " is not an Armstrong Number");
    }  
}
arm(345);