var fs=require('fs');
fs.readFile('event.js',function(err,data){
if(err){
    return console.error(err);
}
console.log("Asynchronous read: " +data.toString());
});