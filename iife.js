var v = 35;

(function() {
  var v = 45;
  console.log("v = ", v);
  function local() {
      v = 55;
      console.log("v = ", v);
    }
  local();
  console.log("v = ", v);
}) ();

console.log("v = ", v);
local(); // throws ReferenceError