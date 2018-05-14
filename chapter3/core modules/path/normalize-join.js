var path = require('path');
// Fixes up .. and .

console.log(path.normalize('..//foo//bar/./'));



// logs on Unix: foo/bar/bas
// logs on Windows: foo\bar\bas
console.log(path.join('foo', '/bar', 'bas'));


var completePath = '/foo/bar/bas.html';
// Logs : /foo/bar
console.log(path.dirname(completePath));
// Logs : bas.html
console.log(path.basename(completePath));
// Logs : .html
console.log(path.extname(completePath));