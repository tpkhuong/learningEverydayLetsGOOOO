import { ourChars as firstObj, ourFavorites as secondObj } from "./chars";

export function sayHi() {
    console.log("this is from inside of sayHi function");
    console.log("Hello from ourFunctions.js");
    console.log(`this char says hi: firstName:${firstObj.firstChar.firstName}, lastName: ${firstObj.firstChar.lastName}. They live in state: ${secondObj.firstFavoriteThings.state}`);
}

export function sayGoodbye() {
    console.log(`this char has to say goodbye: firstName: ${firstObj.secondChar.firstName}.`);
}

