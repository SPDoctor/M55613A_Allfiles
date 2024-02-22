'use strict';

v = 23;
console.log("outside f() with v = ", v);

function f() {
  console.log("inside f() with v = ", v);
  console.log("inside f() with v2 = ", v2);
  v = 55;
  v2 = 35;
  console.log("inside f() with v = ", v);
  console.log("inside f() with v2 = ", v2);
  var v2 = 45;
  console.log("inside f() with v = ", v);
  console.log("inside f() with v2 = ", v2);
}

f();
console.log("outside f() with v = ", v);
console.log("outside f() with v2 = ", v2);
