function check(num,num2){
    a=num;
    b=num2;
    console.log(`a is= ${a}`);
    console.log(`before swap b= ${b}`);
    a=a+b;
    b=a-b;
    a=a-b;
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
}
check(10,20);

