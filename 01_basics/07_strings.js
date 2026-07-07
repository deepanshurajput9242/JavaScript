const name="hitesh"
const repoCount=50

// console.log(name+repoCount+"Value");

//string intepulation 
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

//string declare another method
const gameName=new String('hiteshhcc')
//string is  a object 
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString=gameName.substring(0,3);//last wala index nhi access hoga

console.log(newString);
const anotherString=gameName.slice(0,4);                                             
//isme negative index bhi jaati h dhyaan se dekh 
console.log(anotherString);

const newStringOne="   hitesh   "

console.log(newStringOne.trim());


const url="https://hitesh.com/hitehsh%20chaudhary"

console.log(url.replace('%20','-'));
//replace ka khel h ki jo bhi cheej hm chahte h voh repalce hojaavegi
console.log(url.includes('hitesh'));//for checking

console.log(gameName);





