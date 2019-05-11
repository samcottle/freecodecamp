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
