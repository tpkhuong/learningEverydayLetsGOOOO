var ourSelectors = require("./selectors");

var thisIsAnExample = {
  firstKey: "hello",
  secondKey: "world",
};

function printStuff(ourSelectorsInput) {
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
