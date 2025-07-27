function palindron(num){
    let numstr=num.toString();
    let result=numstr.split('').reverse().join('');
    if (numstr===result){
        console.log(`${num} is palindron`);
    }
    else{
        console.log(`${num} is not palidron`)
    }
}
palindron(121);
palindron("vinay")
palindron(0);
palindron("naman");