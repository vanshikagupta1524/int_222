// let x;
// const y = 50;
// var z = 70;
// console.log(z);
// a(40);
// {
//     let x =  90;
// console.log(x);
// }
// a(20);
// {
//     const y = 89;
//     console.log(y);
//     z = 40;

// }
// console.log(z);
// console.log(y);
// function a(b){
//     console.log(b);
// }

// x=10;
// x=x++;
// console.log(x);
// var x=(x>10)?"Above ten":"equal to ten";
// console.log(x);
// var x = [0,1,2,3,4,5,6,7,8,9];
// var a = [x,x,x,x,x,"NULL"];
// console.log(a);
// console.log(a[4]);
// console.log(a[5]);
// for(var i = 0,j=9;i<=j;i++,j--){
//     console.log('a[' + i + '][' + j +']=' + a[i][j]);
// }


// practical 1
// function x(foo){
//     console.log('hello' ,foo);
//     console.log(typeof foo);

// }
// x(true);
// console.log(typeof x);

// function x(foo){
//     const x = 6;
//     console.log('hello' ,foo);
//     console.log(typeof foo);

// }
// x(true);
// console.log(typeof x);

// function x(foo){
//     let x = 5;
//     console.log('hello' ,foo);
//     console.log(typeof foo);

// }
// x(true);
// console.log(typeof x);

// function y(a){
//     return (a-32)*5/9;
// }
// console.log(y(20));
// console.log(y(50));

// // Input
// const readline=require('readline');
// // readline for import
// const a = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// a.question('Enter a value:', (userInput)=>{
//     console.log('your value:', (userInput));
//     a.close();
// })


// // Input
// const readline = require('readline');
// // readline
// const a = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// a.question('Enter a value:', (userInput) => {
//     const num = parseFloat(userInput);
//     if(!isNaN(num)){
//         console.log('your value: ', (userInput))
//     }
//     else{
//         console.log('invalid value');
//     }
//     a.close();
// });

// function countdown(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 1;
//     if(nextNumber>0){
//         countdown(nextNumber);
//     }
// }
// countdown(10);

// function countdown(fromNumber){
//     console.log(fromNumber);
//     let nextNumber = fromNumber - 4;
//     if(nextNumber>0){
//         countdown(nextNumber);
//     }
// }
// countdown(10);

// function welcome (){
//     console.log("welcome to time code");
// // 1s=1000ms
// }
// function welcome1 (){
//     console.log("i am set interval");
// }
// function welcome2 (){
//     console.log("i am set immediate");
// }
// var id1 = setTimeout(welcome, 5000);
// var id2 = setInterval(welcome1, 1000);
// var id3 = setImmediate(welcome2, 3000);

// clearTimeout(id1);
// clearInterval(id2);

// const readline = require('readline');
// // readline
// const a = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// a.question('Enter a value:', (userInput) => {
//     const num = parseFloat(userInput);
//     if(!isNaN(num)){
        
//         table(num);
//     }
//     else{
//         console.log('invalid value');
//     }
//     a.close();
// });
// function table(fromNumber){
//     let num = 0;
//     console.log("table: ");
//     let interval = setInterval(function(){
//         num++;
//         if(num<11){
//             console.log(fromNumber,"*",num,"=",fromNumber*num);
//         }
//         else{
//             console.log('end');
//             clearInterval(interval);
//         }
//         }, 1000);
    
// }

// function cd(n,t){
//     console.log(n,"*",t,'=',n*t);
//     t=t+1;
//     if(t<=10){
//         setTimeout(function (){cd(n,t);},2000);
//     }
//     else{
//         clearTimeout();
//     }
// }


// const readline = require('readline');
// // readline
// const a = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// a.question('Enter a value:', (userInput1) => {
//     a.question('Enter a value2:', (userInput2) =>{
//     const num1 = parseFloat(userInput1);
//     const num2 = parseFloat(userInput2);
//     if(!isNaN(num1)||!isNaN(num2)){
//         console.log('invalid input');
//         a.close();return;
       
//     }
    
//         const sum=num1+num2;
//         const sub=num1-num2;
//         const div=num1/num2;
//         const mul=num1*num2;
// console.log("addition: ",sum);
// console.log("sub: ",sub);
// console.log("div: ",mul);
// console.log("mul: ",div);
   
//     a.close();
// });
// });