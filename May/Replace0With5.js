
import answerValidator from "./GeneralUtil.js";
function convertZeroDigitstoFive(number){
   let ans = 0;
   let i=0;
   while(number>0){
    let rem = number %10;
    if(rem==0){
        rem=5;
    }
    ans = ans + Math.pow(10,i++) * rem; //10^0 , 10^1....
    console.log("ans::"+ans)
    number = Math.floor(number/10)
    console.log(number)
   }
   return ans;
}
answerValidator(convertZeroDigitstoFive(1234560),1234565)
