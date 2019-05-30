# Regular expressions
Regular expressions (also known as *regex* or *regexp*) help you match, search, and replace text by using symbols and text.

These are widely used in programming. Here is how you can use them in JavaScript.

## The test method
This is used to match part of a string. For example, if I wanted to find the word `"the"` in the string `"The dog chased the cat"` I could use the regex `/the/`.

In JavaScript, a common way to test this would use the `.test()` method:
```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
let result = testRegex.test(testStr);

consol.log(result); // true
```
This returns either `true` or `false`.

**Note:** This is case sensitive.
