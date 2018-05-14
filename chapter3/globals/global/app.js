console.log(console === global.console);       // true
console.log(setTimeout === global.setTimeout); // true
console.log(process === global.process);       // true1

require('./addGlobal'); 
console.log(global.newglobal); // 22222 