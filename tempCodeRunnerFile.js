var fs = require('fs');
fs.truncate('Input1.txt',
function (err){
if(err)throw err;
console.log('File Truncated!');
});