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
These functions can also be chained together. For example, if you wanted to take all the even numbers in an array, and multiply these by `2`:
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
Here's another example, demonstrating how you can chain two high-order functions together to:
1. `filter()` the array for positive, whole numbers (i.e. that have a remainder of `0` when divided by themselves).
2. Square the remaining values in the array with `map()`.
```js
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter(num => num > 0 && num % 1 === 0).map(num => num * num);
  return squaredIntegers;
};

const squaredIntegers = squareList (realNumberArray);
console.log(squaredIntegers);
```
## Using default parameters
ES6 introduces default parameters as a way of specifying that a certain parameter should be used when an argument is undefined.
For example, if you wanted to add a default value of `4` to `number` when a value wasn't specified:
```js
const increment = (function() {
  "use strict";
  return function increment(number, value = 4) {
    return number + value;
  };
})();

console.log(increment(5, 2)); // 7
console.log(increment(5)); // 9
```

## Using rest operators
A rest operator (`...`) is a way of creating more flexible functions, which can take an indefinite number of arguments.
For example, the following function:
```js
const sum = (function() {
  "use strict";
  return function sum(x, y, z) {
    const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
```
Can be rewritten so that it will work the same way with any number of arguments (`...args`) passed into it:
```js
// Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.

const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
```

## Using spread operators
A spread operator (`...arr`) can be used to unpack (or *spread*) an array.

It only works in-place (i.e. in an argument to a function, or in an array literal: `[...arr]`).

For example, the following way of getting the maximum value from an array (using `apply()`):
```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // Returns 89
```
Can be simplified to:
```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // Also returns 89
```

## Destructuring assignment
This is new in ES6, and is a way of simplifying the syntax when you want to assign variables from:
- An object.
- A nested object.
- An array.

### Destructuring assignment with objects
To destructure an object when you want to assign values from it.

For example, to assign values `x`, `y`, and `z`:
```js
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54
```
In ES6, this can be simplified to:
```js
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54
```

#### Destructuring assignment into an object
Useful for making tidier code.

Also good for API calls, when you often get a complex response, and want to get this down to just the values you want to work with.

For example, this pseudocode:
```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```
Could also be written as:
```js
const profileUpdate = ({ name, age, nationality, location }) => {
  // do something with these fields
}
```
Here's another example. With our `const stats` object:
```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
```
Instead of using:
```js
const half = (function() {
  "use strict";
  return function half(stats) {
    return (stats.max + stats.min) / 2.0;
  };
})();
```
We could use this tidier code, passing in *only* the values we need:
```js
const half = (function() {
  "use strict";
  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();
```
And for both:
```js
console.log(stats); // The whole object
console.log(half(stats)); // 28.015
```

### Destructuring assignment with nested objects
This can also be used for nested objects. For example, here is how you would use destructuring assignment to get the `max` of `forecast.tomorrow` (assigning it to `maxOfTomorrow` along the way):
```js
const LOCAL_FORECAST = {
  today: {min: 72, max: 83},
  tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow: {max: maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}

#### Reassigning array elements
In some situations involving array destructuring, you may want to collect remaining elements and put them in a separate array. For this, you can combine destructuring assignment and the Rest Operator (`...`)
console.log(getMaxOfTmrw(LOCAL_FORECAST)); // 84.6
```

### Destructuring assignment with arrays
Destructuring can also be used for arrays. This is similar to using a spread operator, but unlike a spread operator (which only lets you unpack an array as a bunch of comma separated values) you can choose which elements you want to assign to variables.

When using a destructuring assignment for an array you can use commas (`,`) to reach your desired index within an array.

For example, here is how you would use destructuring to assign the values at index `0`, `1`, and `4` of an array to `a`, `b`, and `c`:
```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```
Destructuring can also be used to swap values in an array. For example, to swap the values of `a` and `b`:
```js
let a = 8, b = 6;

(() => {
  "use strict";
  [a, b] = [b, a];
})();

console.log(a); // 6
console.log(b); // 8
```

#### Reassigning array elements
In some situations involving array destructuring, you may want to collect remaining elements and put them in a separate array. For this, you can combine destructuring assignment and the Rest Operator (`...`).

This works when you put the Rest Operator as the last variable in the list, and is effectively the same as using the `.slice()` method.

For example, to store the the first two values from the `source` array, and store them in a new array `arr`:
```js
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);
```

## Template literals
These allow you to create complex strings that are:
- Multi-line, by wrapping the string in backticks.
- Interpolation. Using placeholders (such as `${variable}` or `${multiple + concatenated + variables}`).

Here's a simple example:
```js
const me = {
  name: "Sam C",
  age: 36
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${me.name}!
I am ${me.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Sam C!
// I am 36 years old.
```

You can use template literals to, for example, generate some HTML from a JavaScript `const`:
```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

// Pushes the following HTML to the resultDisplayArray:
/*  [ `<li class="text-warning">no-var</li>`,
      `<li class="text-warning">var-on-top</li>`,
      `<li class="text-warning">linebreak</li>` ]
 */
```

## Using simple fields for object literal declarations
As of ES6, there's a much simpler way of defining object literals. Instead of using:
```js
const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name: name,
    age: age,
    gender: gender
  };
}

console.log(createPerson("Sam C", 36, "Male"));
```
To avoid the redundancy of having to write `name: name`, you can write `name` once and it is converted automatically. Here's the same thing, using a syntactically simpler format:
```js
const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Sam C", 36, "Male"));
```

## Writing concise declarative functions
With ES5, you have to use the keyword `function` when defining a function within an object. With ES6, this is not required. So for example, in ES5:
```js
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);
```
Can be refactored to this, in ES6:
```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};

bicycle.setGear(3);
console.log(bicycle.gear);
```

## Constructor functions
A constructor function allows you to create a template, and then *construct* as multiple objects using this template. You do this by defining a `class`:
**Note:** `class` is in no way comparable to a full-fledged `class` from Java or Python.
```js
function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // carrot
```
Inside the template, the thing called `this` is the object that 'owns' the code. The value of `this`, when used in an object is the object itself (i.e. `this.name = name`).

We can create other `Vegetable`s as we want using this constructor function.

Best practice for constructor functions is to use Pascal notation (where the first letter of each word is uppercase).

```js

```
