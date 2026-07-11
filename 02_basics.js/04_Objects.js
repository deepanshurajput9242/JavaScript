const tinderUser=new Object();//singleton object h 


//const tinderUser={}//ese bhi same hi object bnega // yh literals h

console.log(tinderUser);

 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false

 console.log(tinderUser);


 const regularUser={
    email:"someoner@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Deepanshu",
            lastname:"Rajput"
        }
    }
 }
 console.log(regularUser.fullname.userfullname.firstname);
 const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}


// const obj3=Object.assign({},obj1,obj2);// yh copy krne k liye hota h ek object se doosre object m copy hojata h yh object 

// console.log(obj3);

const obj3={...obj1, ...obj2}//yh bhi copy krne k lie hota h 
console.log(obj3);

 const users=[//array of the object 
    {
 

    },
 ]

 console.log(tinderUser);
 console.log(Object.keys(tinderUser));

 console.log(Object.values(tinderUser));

 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));//isme poochte h ki isme yh property h ki nhi 
 
 
 
 
 



