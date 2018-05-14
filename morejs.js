var foo;
console.log(foo); // undefined

var foo = { bar: 123 };
console.log(foo.bar); // 123
console.log(foo.bas); // undefined

// string converted to number
console.log('--EXACT EQUALITY--')
console.log("5 == '5':", 5 == '5'); // true
console.log("5 === '5':",5 === '5'); // false

// Are these all falsy?
if (!false) {
  console.log('falsy');
  }
  if (!null) {
  console.log('falsy');
  }
  if (!undefined) {
  console.log('falsy');
  }