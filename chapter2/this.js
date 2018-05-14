var foo = {
  bar: 123,
  bas: function() {
    console.log('inside this.bar is:', this.bar);
  }
};
console.log('foo.bar is: ', foo.bar);  // foo.bar is: 123
foo.bas();
// inside this.bar is: 123

function foo1() {
  console.log('is this called from globals? : ', this === global);  // true
}
foo1();

var foo = {bar: 123};
function bas() {
  if (this === global) console.log('called from global');
  if (this === foo) console.log('called from foo');
}
// global context
bas();
// called from global
// from foo
foo.bas = bas;
foo.bas();  // called from foo