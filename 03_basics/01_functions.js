

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
sayMyName()
// function addTwoNumbers(number1,number2){//function ki definition ko bolte h parameeters
// console.log(    number1+number2
// );
function addTwoNumbers(number1,number2){//function ki definition ko bolte h parameeters
//  let result=number1+number2
//  return result// result k baad kuch bhi print nhi hota h 
return number1+number1

}
const res=addTwoNumbers(3,"5");//function ko call krte h use agruement khte h 
console.log(res);//undefineed aai kese??
//


function loginUserMessage(/**username**/ username="sam"){
   if(!undefined){ // if(username===undefined){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))

// console.log(loginUserMessage());//undefined kyunki tumne agruement m kuch dala hi nhi h 


function calculateCartPrice(val1,val2, ...num1){//... is ko spread bhi bolte h or yh ek sath aajeynge return m

    return num1
}
console.log(calculateCartPrice(6,29,70));//ab val1 m toh 6 chali gyi val2 29 chli gyi or baaki array m chli gyi value

const user={
    username:"hitesh",
    prices:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);

    
}
handleObject(user)//price nhi h toh undefined aayega hi

handleObject({
    username:"sam",
    price:399
})

const myArr=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArr));













