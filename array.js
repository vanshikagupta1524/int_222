// const courses=[ 'javaScript','Node js','Ract js'];
// console.log(courses);
// console.log(courses[3]); 


// const subject=Array('javaScript','Node js','Ract js');
// console.log(subject);
// console.log(subject.length);
// subject[7]='Angular js';
// console.log(subject);
// console.log(subject[7]);

// var num1=[11,12,13]
// var num2=[14,15,16]
// var num3=[17,18,19]
// console.log(num1.concat(num2,num3));
// console.log(num2.concat(num3));
// console.log(num1.num2); 
// //undefined
// var numbers=[6,4,8,2,8,9,3,100,101,'hellooo'];
// var even=numbers.filter(function(x){
//     return x%2 ==0;
// })
// console.log(even);
// var array_1=[2,3,4,5,6];
// array_1.forEach(function(_,i){       //we can also write function(num,i) 
//     array_1[i] **=2;
// })
// console.log(array_1);


// var numbers=[9,81,8];
// var even=numbers.some(function(x){  //if any one value is true it will print true.
//     return x%2==0;
// })
// console.log(even);

// var items=[100,-20,-30,9.3,50];
// console.log(items.sort());   //output : [ -20, -30, 100, 50, 9.3 ]

// console.log(items.sort(function(a,b){   //output: [ -30, -20, 9.3, 50, 100 ]
//     return a-b; 
// }));


// var names=['divid','micheal','reeta','anuj'];
// console.log(names.sort());


// var items =['divid','micheal','reeta','anuj'];
// console.log(items.slice(0,3));
// console.log(items);

// var item =['divid','micheal','reeta','anuj'];
// console.log(item.splice(0,3,"i an in"));
// console.log(item);

// var items = ['David','John','Michael','Reeta'];
// console.log(items.push('Ibrahim'));
// console.log(items);
//  var items=['david','john','Michael','Reeta'];
//  console.log(items.pop());
//  console.log(items);
//  console.log(items.pop());
//  console.log(items);
//  console.log(items.pop());

// var numbers=[61,4,8,3,100];
// var even=numbers.find(function(x){
//     return x%2==0;
// });
// console.log(even);

// var items=['David','John','Michael','Reeta'];
// console.log(items.reverse());
// var items=['David','John','Michael','Reeta'];
// console.log(items.shift());
// console.log(items);
// var a=[1,2,3,4,5];
// console.log(a.join(','));
// =========================================================
// event intro
// var http=require('http');
// var server=http.createServer(function(req,res){
//     if(req.url=='/')
//     {res.write('Wecome to Index page');
//     res.end();
// }else if(req.url=="/emp")
// {res.write('Welcome to Employees page');
// res.end();

// }else if(req.url=="/admin")
// {res.write('Welcome to Admin page');
// res.end();
// }else res.end('Invalid Request!');});
// server.listen(2020);
// console.log('Server is runing at port 2020');
// after writing this code we need to write this in chrome browser
// http://localhost:2020/admin.
// rather than admin we can use anything



