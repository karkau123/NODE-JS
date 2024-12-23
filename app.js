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

// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin , 
//                         output : process.stdout
// });

// let num1 = Math.floor((Math.random() * 10 ) + 1);
// let num2 = Math.floor((Math.random() * 10 ) + 1);
// let ans = num1+num2;

// rl.question(`WHAT IS ${num1} + ${num2}? \n`,
//     (userInput) =>{
//           if (userInput.trim() == ans)
//           {
//              rl.close();
//           }
//           else
//           {
//              rl.setPrompt('Incorrect Response Tre Agaiin\n');
//              rl.prompt();
//              rl.on('line' , (userInput) =>{
//                   if (userInput.trim() == ans)
//                   {
//                      rl.close();
//                   }
//                   else
//                   {
//                      rl.setPrompt(`Your answer of ${userInput} is incorrect: TryAgain!! \n`);
//                      rl.prompt();
//                   }
//              } )
//           }
//     }
// );  
// rl.on('close' , ()=>{
//     console.log('Correct Answer!!!');
// });


// File System Module
//  const { isUtf8 } = require('buffer');
// const fs = require('fs');

//  fs.writeFile('example.txt' , "this is an example" , (err)=>{
//     if (err)
//     {
//          console.log("Error");
//     }
//     else
//     {
//          console.log ("File successfully Created");
//          fs.readFile('example.txt' ,'utf8' , (err , file) =>{
//              if (err)
//                 console.log(err);
//               else
//               console.log(file);
//          })
//     }
//  } );


// fs.rename('example1.txt' , 'example2.txt' , (err) =>
// {
//      if (err)  console.log("Error unable to rename");
//      else  console.log ("File Renamed Successfully");  
// });


// fs.appendFile('example1.txt' , ' Hey I am Kartikeya' ,(err)=>
// {
//       if (err)  console.log("Error");
//       else
//       {
//          console.log("Appeded Successfully \n");
          
//       }
// });

// fs.unlink('example2.txt' , (err) =>
// {
//    if (err)  console.log(err);
//    else
//    console.log("File Deleted Successfully");
// });


// part 2 working with folders

