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

/***
 * ES import using import and using commonJs module.exports then in index.js our entry point we used commonJs importing using var printStuff and require("./csmExports")
 * it compiled successfully but we got an error in the console.
 * when we changed the import of printStuff in index.js our entry point to using import printStuff from "./csmExports.js" it didnt compile successfully.
 * ***/

/***
 * when we used commonJs to import using var outSelectors = require("./selectors") and module.exports = printStuff in csmExports.js then used
 * ES import keyword to import. import printStuff from "" or used commonJS import using var printStuff = require("./csmExports") both compiled successfully.
 *the file that we used to import and export both import and export method we use have to match. Therefore if we use commonJS to import using var nameOfObj = require("path of file")
 we have to use module.exports = nameOfObjToExport

 if we use ESM import nameOfObj from "pathOfFile" we have to use ESM exports. export {} or export default or export the variable/identifiler we want.
 * ***/
