function check(num) {
   if( num > 0 ) {
       return "positive";
   }
    else if( num < 0 ) {
         return "negative";
    }
    else {
         return "zero";
    }
}
console.log(check(-0));