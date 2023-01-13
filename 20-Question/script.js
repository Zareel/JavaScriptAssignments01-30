//? In the following shopping cart add, remove, edit items
/*
const shoppingCart = ["milk", "coffee", "tea", "honey"];
* add meat in the beginning of the shopping cart if it has not been already added
* add sugar at the end of the shopping cart if it has not been already added
* remove "honey"
* modify Tea to "Green tea"
*/

const shoppingCart = ["milk", "coffee", "tea", "honey"];
console.log(shoppingCart.unshift("meat"));
console.log(shoppingCart);

console.log(shoppingCart.push("sugar"));
console.log(shoppingCart);

console.log(shoppingCart.pop("honey"));
console.log(shoppingCart);

shoppingCart[2] = "Green tea";
console.log(shoppingCart);
