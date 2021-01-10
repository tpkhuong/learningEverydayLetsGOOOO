var ourSelectors = require("./selectors");
// import { ourSelectors } from "./selectors";

/* if we use CSM to import we have to use CSM exports. when we used ES import we got an error */

var thisIsAnExample = {
  firstKey: "hello",
  secondKey: "world",
};

function printStuff(ourSelectorsInput) {
  console.log(ourSelectors);
  console.log("This is from csmExports.js");
  ourSelectorsInput.divClickMe.addEventListener(
    "click",
    function doSomething(event) {
      console.dir(event.target);
    }
  );
  console.dir(ourSelectorsInput.divClickMe);
}

module.exports = printStuff;
