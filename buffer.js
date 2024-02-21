const buf1=Buffer.from('this is Node.js class');
const buf2=Buffer.from('54686973206973204e6f64652e','hex');
console.log(buf1.toString('hex'));
console.log(buf2.toString('hex'));