var foo;
console.log(foo);  // undefined

var foo = {bar: 123};
console.log(foo.bar);  // 123
console.log(foo.bas);  // undefined

// string converted to number
console.log('--EXACT EQUALITY--')
console.log('5 == \'5\':', 5 == '5');    // true
console.log('5 === \'5\':', 5 === '5');  // false

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


function printableMessage() {
  var message = 'hello';
  function setMessage(newMessage) {
    if (!newMessage) throw new Error('cannot set empty message');
    message = newMessage;
  }
  function getMessage() {
    return message;
  }
  function printMessage() {
    console.log(message);
  }
  return {
    setMessage: setMessage,
    getMessage: getMessage,
    printMessage: printMessage
  };
}

// Pattern in use
var awesome1 = printableMessage();
awesome1.printMessage();  // hello
var awesome2 = printableMessage();
awesome2.setMessage('hi');
awesome2.printMessage();  // hi
// Since we get a new object everytime we call the module function
// awesome1 is unaffected by awesome2
awesome1.printMessage();  // hello
