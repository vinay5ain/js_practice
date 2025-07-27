function reverse(inputString){
    result="";
    for(let i=inputString.length-1;i>=0;i--){
        result=result+inputString[i];
    }
   return result;
}
console.log(reverse("vinay"));