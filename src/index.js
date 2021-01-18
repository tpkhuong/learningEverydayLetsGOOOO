import { sayHi, sayGoodbye, makeStuffHappen } from "./ourFunctions";
import "../public/css/index.css";
import { ourSelectors } from "./selectors";
import printStuff from "./csmExports";
// var printStuff = require("./csmExports");

console.log(`this is a function from ourFunction.js ${sayHi()}`);
console.log(`this is a function from ourFunction.js ${sayGoodbye()}`);

console.log(makeStuffHappen());

printStuff(ourSelectors);

var count = 0;
function updateSpan() {
  var time = new Date().toLocaleTimeString();
  ourSelectors.updateSpan.textContent = String(time);
}

// setInterval(updateSpan, 1000);

function getUserInput() {
  /*** code below will select the form on submit. call preventDefault we can access the form's elements.
   * event.target.elements.USERNAME => username is the id we gave to our input element in our HTML
   *  ***/
  ourSelectors.ourForm.addEventListener("submit", function clickStuff(event) {
    event.preventDefault();
    console.dir(event.target);
    console.dir(event.target.elements.username);
    console.dir(event.target.elements.username.value);
  });
}

getUserInput();
