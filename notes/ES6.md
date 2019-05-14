# ECMAScript 6
JavaScript is based on ECMAScript (or ES). This is constantly evolving, with the latest version (ES6) being released in 2015.

This new version allows for some additional functionality, such as:
- New ways to express variables: `let` and `const`
- Arrow functions
- Classes
- Modules
- Promises
- Generators

**Note:** Even though it was released back in 2015, not all browsers support ES6 yet.

## `let` and `const`
In ES6, variables can instead be preceded with:
- `let`: to declare a variable within a very specific scope.
- `const`: to declare a variable that will never be changed.

### `let`
In many ways `var` and `let` work identically. But with `var`, you can overwrite a variable with the same name that you declared previously. This can cause issues, especially in larger code bases, where you may do this accidentally. By using `let`, any attempt to overwrite will throw an error in the console.

Also, `let` is commonly used because the scope will be limited to a defined block statement or expression (the one that it's declared in).

## `const`
Basically a `const`ant variable, that is read-only (so you can't re-assign it). It's common practice to use UPPER_CASE (separated with underscores) when naming `const`s.

While a `const` can't be reassigned, it can still be mutable in the case of arrays. For example:
```js
"use strict";
const S = [5, 6, 7];
S[2] = 45;

console.log(S);
```
This will log `[5, 6, 45]`, not `[5, 6, 7]`.

### Preventing mutation
By declaring an array as a `const` it is still mutable. But if you *really* don't want properties added, deleted, or update you can use the `Object.freeze` function. For example:
```js
const obj = {
  name:"Sam",
  site:"Github.com"
};

Object.freeze(obj);
obj.review = "Tom"; // Is ignored. Mutation not allowed
obj.hat = "None"; // Is ignored. Mutation not allowed
console.log(obj); // { name: "Sam", site:"Github.com"}
```
**Note:** `Object.freeze` can also be used for objects declared with `let`.

### Strict Mode
By declaring `"use strict"`, you'll enable strict mode. This catches a bunch of common coding mistakes, such as variables not being declared correctly (with error messages like `ReferenceError`).

## Arrow functions
When writing anonymous functions (i.e. functions that aren't named, because they won't be reused), arrow functions can be used to vastly simply the syntax.

These can be used for functions that:
- Have no function body.
- Only has a return value.

For example, this:
```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```
Becomes:
```js
const myFunc = () => "value"
```

Here's another example, this time with parameters:
```js
const myConcat = function(arr1, arr2) {
  "use strict";
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5])); // Logs 1, 2, 3, 4, 5
```
Becomes:
```js
"use strict";
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5])); // Logs 1, 2, 3, 4, 5
```

## Higher-order functions
These are functions that take an array, run some logic on each item in the array, and returns a new array.

The most frequently used are:
- `map()`: Loops through every element in an array and executes some logic (a function that you specify) on it. It then returns a new array with the function you performed.
- `filter()`: Loops through every element in an array and performs a test (a function that you specify) on it. It then returns a new array containing only the values that pass the test.
- `reduce()`: Executes a reducer function on each member of the array, resulting in a single output value.
They can also be chained together as needed.

### `map()`
To take each item in an array and square it (i.e. multiplying it by itself) you would use, for example:
```js
let arr = [1, 2, 3, 4, 5];
const squareArr = arr.map(num => num ** 2);

console.log(squareArr); // [ 1, 4, 9, 16, 25 ]
```

### `filter()`
To filter out the even numbers in an array (we only want the odd numbers) we could use, for example:
```js
let arr = [1, 2, 3, 4, 5];
const oddNums = arr.filter(num => num % 2 !== 0);

console.log(oddNums); // [ 1, 3, 5 ]
```

### `reduce()`
To reduce the array to one value you could, for example, add them together:
```js
let arr = [1, 2, 3, 4];
const sumReducer = (accumulator, currentValue) => accumulator + currentValue; // Sets up the logic for adding each value in the array together.
const sum = arr.reduce(sumReducer); // Performs the logic (1 + 2 + 3 + 4), reducing the array down to a single value.

console.log(sum);
```
### Chaining them together
If you wanted to take all the even numbers in an array, and multiply these by `2`:
```js
const numbers = [1, 2, 4, 5, 6, 7, 7, 9, 11, 14, 43, 56, 89]

function isEven(x) {
  return x % 2 === 0
}

function addTwo(x) {
  return x * 2
}

const result = numbers.filter(isEven).map(addTwo) // [4, 8, 12, 28, 112]
```
