//premitive
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt




const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;


const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);



/*Why? 🤔
Jab tum likhte ho

JavaScript

Symbol("123")
to "123" sirf description (label) hota hai, value nahi.

Har baar Symbol() call karne par JavaScript ek naya unique symbol create karta hai.

So internally aisa samjho:

JavaScript

const id = Symbol("123");        // Symbol #1
const anotherId = Symbol("123"); // Symbol #2
Dono ka description same hai:

JavaScript

"123"
Lekin identity alag hai.

Isliye

JavaScript

id === anotherId
becomes

JavaScript

Symbol#1 === Symbol#2
Output:

JavaScript

false
Example
Jaise do students ka naam same ho:


Name: Rahul
Roll No: 10

Name: Rahul
Roll No: 20
Naam same hai.

Lekin dono students different hain.

Waise hi


Symbol("123")
Symbol("123")
Description same hai.

Lekin symbols different hain.

Proof
JavaScript

const s1 = Symbol("abc");
const s2 = Symbol("abc");

console.log(s1); // Symbol(abc)
console.log(s2); // Symbol(abc)

console.log(s1 === s2); // false
Console me dono Symbol(abc) dikhte hain, lekin ye same symbol nahi hote.*/



const bigNumber=323456789034567890n;


//Reference(Non Premitive)
//Array, Objects,functions

const heros=["shaktiman","naagraaj","doga"];
let myobj={
    name:"hitesh",
    age:22,
}

const myFunction =function(){
    console.log("Hello Bhai");
    
}
myFunction();

console.log(typeof bigNumber);
console.log(typeof null);//bhut importanat hai interview m poocha 
//jata h dhyan rkh null ka type object hota h

