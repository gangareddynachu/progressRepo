/*Approach:
Use the concept of 10^0 for units place
10^1 for tens place
10^2 for 100's place and so on....

get the digit at that place: by doing number%10
if digit is 0 make it 5
then have a holder variable known as ans, starting with 0

do 
ans = ans + Math.pow(10,i++) * rem; 

*/


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
