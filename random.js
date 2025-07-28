function random(min,max){
 const random=Math.floor(Math.random()*(max-min+1))+min;
 console.log(`${max} and ${min} so random is ${random}`);
}
random(18,20)