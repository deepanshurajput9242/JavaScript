const marvel_heros=["thor","Ironmen","spiderman"];
const dc_heros=["superman","flash","batmen"];
marvel_heros.push(dc_heros);

console.log(marvel_heros);// ek k and ek merge hogyi dikkat yha aai[ 'thor', 'Ironmen', 'spiderman', [ 'superman', 'flash', 'batmen' ] ]

console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros);// same dikat aati h

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]


const real_arr=anotherArr.flat(Infinity);//JavaScript me flat() method ka use nested arrays ko ek single array me convert (flatten) karne ke liye hota hai.

console.log(real_arr);

console.log(Array.isArray("Hitesh"));// isme hm pooch rhe h ki yh jo array m hitesh likha  hua h yh array h ki nhi??


console.log(Array.from("Hitesh"));// ab yh string ko Array bna dega jo value hogi vhi ex:['H' ,'i'.....]

console.log(Array.from({name:"hitesh"}));//interesting


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//Array.of put krdeta h 




