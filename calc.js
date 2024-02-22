//import { add, subtract } from './maths.js';
import('./maths.js').then(({add, subtract}) => {
  console.log(add(1, 2));
  console.log(subtract(1, 2));
});

async function getSum(a, b) {
  const { add } = await import('./maths.js');
  console.log(add(a, b));
}

getSum(1, 2);

let v = Math.sqrt(2);
console.log(v); // 1.4142135623730951
let s = JSON.stringify({"v": v}); // '{"v":1.4142135623730951}'
console.log(s);
let o = JSON.parse(s);
console.log(o.v); // 1.4142135623730951