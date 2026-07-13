//array 
// shallow copy //A shallow copy creates a new object, but nested objects are shared between the original and the copied object.


const myArr=[0,1,2,3,5]
const myHeros=["shaktiman","nagaraja"]
console.log(myHeros);


//another method to declare the array 
const myArr2= new Array(1,2,3,4);
console.log(myArr2[1]);

//array methods

myArr.push(6);// add into the array at the last 
myArr.push(9);
myArr.pop();//remove the last  element from the arr ;

myArr.unshift(9);// add in the oth index
myArr.shift();//remove the 0th index element or the first element of the array 

console.log(myArr);
console.log(myArr.includes(6));// yh btata h ki tumhare array m value h ki nhi true or false k form m
console.log(myArr.indexOf(10));// agar array m present h toh index return krdega vrna -1 


const newArr=myArr.join();//bind bhi krsdeta h ar string m bhi convert krdeta h
console.log(newArr);
console.log(myArr);
console.log(typeof myArr);//object h iska type 
console.log(typeof newArr);//string h iska type


//slice,splice

console.log("A ",myArr);


const myn1=myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);


const myn2=myArr.splice(1,3);
console.log("C",myArr);


console.log(myn2);











