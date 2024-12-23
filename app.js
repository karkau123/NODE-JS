// const tutorial = require('./tutorial')
// console.log(tutorial.sum);
// console.log(tutorial.pi);
// console.log(tutorial.mathobj);

// events module
 
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial' , (num1 , num2)=>{
//   console.log(num1+num2);  // This code wil be only executed when tutorial event happens
// });

// eventEmitter.emit('tutorial',1,2);

// class person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name = name;   // _ 'underscore' signifies pvt member
//     }

//     get  name(){
//          return this._name;
//     }

// }

// let karu = new person('Kartikeya');
// let roshu = new person('Roshni');
// karu.on('name' , ()=>{
//       console.log('My name is ' + karu.name);
// })
// roshu.on('name' , ()=>{
//     console.log('My name is ' + roshu.name);
// })
 
// karu.emit('name');
// roshu.emit('name');

// READLINE MODULE

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin , 
                        output : process.stdout
});

let num1 = Math.floor((Math.random() * 10 ) + 1);
let num2 = Math.floor((Math.random() * 10 ) + 1);
let ans = num1+num2;

r1.question();  