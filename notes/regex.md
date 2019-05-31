# Regular expressions
Regular expressions (also known as *regex* or *regexp*) are widely used in programming. They help you match, search, and replace text by using a combination of symbols and text.

Here is how you can use them in JavaScript.

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
If you need more than a simple `true` or `false`, you can `extract()` the match too. For example:
```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

console.log(result); // "coding"
```

#### Extracting multiple matches
For strings like `"Boom, boom, boom, boom!"`, using `match()` will only give you the first result. To find all instances of a match, use the `g` flag. For example:
```js
let vengaSong = "Boom, boom, boom, boom...";
let vengaRegex = /boom/g;
let result = vengaSong.match(vengaRegex);

console.log(result); // ["boom", "boom", "boom"]
```
But wait, what happened to the first `"Boom"`? Without the `i` flag, `match()` is case sensitive. But you can combine flags (for example, `gi` combines the *multiple* and the *non-literal* flags):
```js
let vengaSong = "Boom, boom, boom, boom...";
let vengaRegex = /boom/gi;
let result = vengaSong.match(vengaRegex);

console.log(result); // ["Boom", "boom", "boom", "boom"]
```

#### Using wildcards
When you don't know the exact match in a pattern, and writing regex to cover all possible options would be time consuming (as well as being inflexible), you can use a wildcard (`.`). This is also referred to as a *dot* or a *period*, and you use it like this:
```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

console.log(result); // true
```
