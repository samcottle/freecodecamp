# Basic algorithm scripting

An algorithm is a series of steps that are followed to achieve an outcome.

This section of freeCodeCamp is a series of exercises, but uses concepts that haven't already been explained in the course. Therefore, I'm just dumping the exercises in here as examples of how to achieve certain outcomes.

### Reverse a string
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
```js
function reverseString(str) {
  let arr = str.split(""); // Splits the string into an array. Each item in the array is one letter.
  arr.reverse(); // Reverses the order of the items in the array.
  return arr.join(""); // Joins the array into a string.
}

console.log(reverseString("hello")); // Logs "olleh"
```

### Factorialize a Number

Return the *factorial* of the provided integer. If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

```js
function factorialize(num) {
  let listOfNums = [];
  if (num === 0) {
    return 1;
  }
  for (var i = 1; i <= num; i++) {
    listOfNums.push(i);
  }
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  let factor = listOfNums.reduce(reducer);
  return factor;
}

console.log(factorialize(5)); // Logs 120 (1 * 2 * 3 * 4 * 5)
console.log(factorialize(0)); // Logs 1, as per the if statement
```
**Note:** The reason that is to pass the test `factorialize(0) should return 1.`, which is apparently how factorializing works.

This can also be solved using recursion:
```js
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);
```

### 
