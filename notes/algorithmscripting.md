# Basic algorithm scripting

An algorithm is a series of steps that are followed to achieve an outcome.

This section of freeCodeCamp is a series of exercises, but uses concepts that haven't already been explained in the course. Therefore, I'm just dumping the exercises in here as examples of how to achieve certain outcomes.

### Reverse a string
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
```js
function reverseString(str) {
  let arr = str.split("");
  arr.reverse();
  return arr.join("");
}

reverseString("hello");
```
