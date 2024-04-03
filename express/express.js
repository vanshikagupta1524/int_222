var express = require('express');
var app = express();
app.get('/', function(req, res){
res.download('test.txt', function(err){
if(err) {res.send("File Not Found");console.log("File Not Found");}
else
{console.log("File downloaded successfully");}
});
});
app.listen(2000);
var express=require('express');
var app=express();
app.get('/get',(req,res)=>
{
res.sendFile(__dirname+"/"+"formdata.html")
})
app.get('/form',(req,res)=>
{
res.sendFile(__dirname+"/"+"Formnew.html")
})
app.get('/submit',(req,res)=>
{
response={
name:req.query.name,
age: req.query.age
}
res.write('<table border="2" align =center>');
res.write('<tr><th>Name</th><th>Age</th><tr>');
res.write('<tr>');
res.write('<td>'+req.query.name+'</td>');
res.write('<td>'+req.query.age+'</td>');
res.write('</tr>');
res.write('</table>');
res.end()
});
app.listen(2000);

2:54 PM
26/3/2024
Dr. Senthil Kumar J : 26610
var express = require('express');
var app=express();
app.get('/',(req,res)=>
{
res.send("I am collecting data from the file Add.html")
})
app.get('/form',(req,res)=>
{
res.sendFile(__dirname +"/"+"add.html");
})
app.get('/add',(req,res)=>
{
var response=parseInt(req.query.fn)+parseInt(req.query.sn)
response=response.toString();
res.send('The Result is:'+response);
})
app.listen(4000);

1:06 PM
<html>
<body>
<form action="http://127.0.0.1:4000/add" method="GET">
First number: <input type="number" name="fn">
Second number: <input type="number" name="sn"> <br>
<input type="submit" value="Add">
</form>
</body>
</html>

1:07 PM
var express = require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>
{
res.send("I am collecting data from the file Add.html")
})
app.get('/form',(req,res)=>
{
res.sendFile(__dirname +"/"+"add.html");
})
app.post('/add',(req,res)=>
{
var response=parseInt(req.body.fn)+parseInt(req.body.sn)
response=response.toString();
res.send('The Result is:'+response);
})
app.listen(4000);

1:18 PM
emoji-icon
three-dots-icon
thumbnail
2:05 PM
This mobile is with me

2:05 PM
If anyone forgot pls collect it from me

2:06 PM
I am in 34 207 cabin 9

2:06 PM
If am not there pls wait.
I will be there within 20 mins

2:07 PM
Yesterday
Dr. Senthil Kumar J : 26610
var express = require('express');
var app = express();
const {hello,welcome} = require("./middle");
app.use(hello);
app.get("/",hello,welcome,(req,res)=>{
res.send('Printing: hello'+'<br/>'+'Printing: welcome')});
app.listen(3000, function (err) {
if (err) console.log(err);
console.log("Server started");
})

12:31 PM
const hello = (req, res, next)=>{
console.log(req.method);
console.log('hello');
next();
}
const welcome = (req, res, next)=>{
console.log('welcome');
next();
}
module.exports = {hello,welcome};

12:31 PM
App. All : const express = require('express')
const app = express()
app.all('/welcome', function(req, res, next) {
console.log('only applied for routes that begin with /welcome')
next() })
app.all('/welcome/*', function(req, res, next) {
console.log('only applied for routes that begin with /welcome/*')
next() })
app.get('/hello', function (req, res) {
res.send('hello') })
app.get('/', function (req, res) {
res.send('welcome') })
app.get('/welcome/inside', function (req, res) {
res.send('you are in welcome/inside') })
app.get('/welcome/*', function (req, res) {
res.send('you are in welcome/all') })
app.listen(3000)

12:44 PM
App: useconst express = require('express')
const app = express()
app.use(function(req, res, next) {
console.log('hello world')
next() })
app.use(function(req, res, next) {
console.log('happy holidays')
next() })
app.get('/', function (req, res) {
res.send('Home page') })
app.get('/hello', function (req, res) {
res.send('Hello page') })
app.get('/welcome', function (req, res) {
res.send('welcome Page') })
app.get('/welcome/inside', function (req, res) {
res.send('you are in inside page') })
app.listen(3000)

12:45 PM
Router level middle ware : var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
res.send('Wiki home page');
});

router.get('/about', function(req, res) {
res.send('About this wiki');
});

module.exports = router;

12:52 PM
var express = require('express');
var app = express();
var wiki = require('./wiki.js');
// ...
app.use(wiki);
app.listen(2000);

12:52 PM
var express = require('express');
var app = express();
app.get('/', function(req, res){
res.download('test.txt', function(err){
if(err) {res.send("File Not Found");console.log("File Not Found");}
else
{console.log("File downloaded successfully");}
});
});
app.listen(2000);

1:22 PM
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
app.get('/', function(req, res){
res.cookie('course','html')
res.send('Our website has set the cookies');
console.log('Cookies: ',req.cookies);
});
app.get('/clear', function(req, res){
res.clearCookie('course','html');
res.send('cookie cleared');
});
app.listen(4000);

1:35 PM
var cookieSession = require('cookie-session')
var express = require('express')
var app = express()
app.use(cookieSession({
name: 'session',
keys: ['key1', 'key2'], }))
app.use(function (req, res, next) {
req.sessionOptions.maxAge = 15000
next()})
app.get('/', function (req, res, next) {
if(req.session.views){
req.session.views++;
res.send("No. of visits "+ req.session.views);
} else {
req.session.views = 1;
res.send("No. of visits "+ req.session.views);
} })
app.listen(2000)

1:49 PM
var express = require('express');
var session = require('express-session');
var app = express();
app.use(session({
secret: "cookie",
resave: true,
saveUninitialized: true,
cookie: { maxAge: 5000 } // this is in milliseconds. 30000 is equivalent to 30 seconds(half a minute)
}));
app.get('/', function(req, res){
if(req.session.page_views){
req.session.page_views++;
res.send("No. of visits "+ req.session.page_views);
} else {
req.session.page_views = 1;
res.send("You are a first time visitor");
}
});
app.listen(2000);