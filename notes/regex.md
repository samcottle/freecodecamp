# Regular expressions
Regular expressions (also known as *regex* or *regexp*) help you match, search, and replace text by using symbols and text.

These are widely used in programming. Here is how you can use them in JavaScript.

## Matching
The `test()` method is used to match part of a string. For example, if I wanted to find the word `"the"` in the string `"The dog chased the cat"` I could use the regex `/the/`.

In JavaScript, a common way to test this would use the `.test()` method:
```js
let testStr = "Sam likes to code";
let testRegex = /code/;
let result = testRegex.test(testStr);

console.log(result); // true
```
This returns either `true` or `false`.

**Note:** This is case sensitive.

### Matching possibilities
To search a string for multiple patterns you can use the `|` operator. So if you wanted to search a string for either `yes` or `no` you could use `/yes|no/`, or for `yes` or `no` or `maybe` with `/yes|no|maybe/`.

## Matching non-literal strings
When using `test()` to match part of a string, it will only work when there is a literal match (so `code` would not match for `Code` or `CODE`).

You can match these using a *flag*. There are several regex flags, but to ignore the case you would use the `i` flag. Here's an example:
```js
let testStr = "Sam likes to code";
let testRegex = /CODE/i;
let result = testRegex.test(testStr);

console.log(result); // true. As would "Code" or "coDE"
```

### Extracting matches
