import { ourChars as firstObj, ourFavorites as secondObj } from "./chars";
import { ourSelectors } from "./selectors";

export function sayHi() {
  console.log("this is from inside of sayHi function");
  console.log("Hello from ourFunctions.js");
  console.log(
    `this char says hi: firstName:${firstObj.firstChar.firstName}, lastName: ${firstObj.firstChar.lastName}. They live in state: ${secondObj.firstFavoriteThings.state}`
  );
}

export function sayGoodbye() {
  console.log(
    `this char has to say goodbye: firstName: ${firstObj.secondChar.firstName}.`
  );
}

export function makeStuffHappen() {
  document.addEventListener("keydown", function learingMode(event) {
    console.dir(event);
    console.dir(event.target);
    var children = event.target.children;
    console.dir(children);
    var makeArray = Array.from(children);
    console.log(Array.isArray(makeArray));
  });
  // document.addEventListener("click", function clicOnDocument(event) {
  //     console.dir(event.target);
  // });

  ourSelectors.mainNav.addEventListener("click", function clickForInfo(event) {
    console.dir(event.target);
    var parentOfLiElements = event.target.parentElement;
    var getChildren = parentOfLiElements.children;
    var makeArrayOfCollection = Array.from(getChildren);
    console.dir(makeArrayOfCollection);
  });
  var div = document.createElement("div");
  var ourChildren = ourSelectors.mainNav;
  console.dir(ourChildren);
  div.setAttribute("class", "inner-container");
  // ourSelectors.mainNav.appendChild("div");
  console.log(ourSelectors.mainNav);
  console.log(ourSelectors.ourWrapper);
  console.log(typeof ourSelectors.ourWrapper);
  console.dir(ourSelectors.ourWrapper);
}
