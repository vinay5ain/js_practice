function random(min,max){
    for(let i=0;i<5;i++){
console.log(Math.floor(Math.random()*(max-min+1)+min));
    }
}
random(10,20);