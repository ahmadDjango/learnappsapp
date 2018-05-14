var fs = require('fs');
// write
fs.writeFileSync('test.txt', 'Hello fs!');
// read
console.log(fs.readFileSync('test.txt').toString());

try {
  fs.unlinkSync('./test.txt');
  console.log('test.txt successfully deleted');
}
catch (err) {
  console.log('Error:', err);
}