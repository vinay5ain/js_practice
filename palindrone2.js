function palin(num){
    const digit=num.toString();
    const result=digit.split('').reverse().join('');
    if(numstr===result){
        console.log(`${num} is palindrone`);
    }
    else{
        console.log(`${num} is not palidrone`);
    }
}