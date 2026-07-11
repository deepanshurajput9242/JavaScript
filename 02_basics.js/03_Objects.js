//singleton

//contructor se bnaega toh singleton se banega 
//vrna literals se banega toh singleton se nhi bnega 

//Object.create// object bnta h voh constructor se bnta h yh waala 
const mySym=Symbol("key");
const JsUser={
    "fullname":"Hitesh",//key and value h 
    age:18,
    [mySym]:"myKey1",
    location:"Jaipur",
    email:"hitesh@gmail.com",
    isLoggedIn:false,
    lastLogin:["Monday","Saturday"]

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);// ab dekho isme Square bracket m hi symbol daala jaata h vrna yh error throw krdega 


JsUser.email="deepanshu.rajput@gmail.com"
Object.freeze(JsUser)
JsUser.email="chatgpt.com"//freeze lgaane k baad koi bhi value change nhi hoskti

console.log(JsUser);

JsUser.greeting=function(){
    console.log("Helloe User");
}

JsUser.greetingTwo=function(){
    console.log("Helloe User");
}
console.log(JsUser.greeting);








// myArray = ["h","i"]
// myArray[1]

