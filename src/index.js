import { sayHi, sayGoodbye, makeStuffHappen } from "./ourFunctions";
import "../public/css/index.css";
import { ourSelectors } from "./selectors";

console.log(`this is a function from ourFunction.js ${sayHi()}`);
console.log(`this is a function from ourFunction.js ${sayGoodbye()}`);

console.log(makeStuffHappen());

var count = 0;
function updateSpan() {
  count += 1;
  ourSelectors.updateSpan.textContent = String(count);
}

// setInterval(updateSpan, 1000);
