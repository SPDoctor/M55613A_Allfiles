let v1 = 0;

function f() {
  if (v1 === 0) {
    const v1 = 24;
    let v2 = 35;
    console.log("v1 = " + v1); // prints 24
    console.log("v2 = " + v2); // throws 35
    }
  console.log("v1 = " + v1); // prints 0
  console.log("v2 = " + v2); // throws a ReferenceError
}

f();
