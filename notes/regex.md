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

### Matching non-literal strings
When using `test()` to match part of a string, it will only work when there is a literal match (so `code` would not match for `Code` or `CODE`).

You can match these using a *flag*. There are several regex flags, but to ignore the case you would use the `i` flag. Here's an example:
```js
let testStr = "Sam likes to code";
let testRegex = /CODE/i;
let result = testRegex.test(testStr);

console.log(result); // true. As would "Code" or "coDE"
```

### Extracting matches
If you need more than a simple `true` or `false`, you can *extract* the match too. For example:
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
But wait, what happened to the first `"Boom"`? Without the `i` flag, `match()` is case sensitive. But you can combine flags (for example, `gi` combines the *multiple* (`g`) and the *non-literal* (`i`) flags):
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

#### Using character classes
When you want to search for a range of characters that match, you can use *character classes*. Any characters placed inside `[squarebrackets]` will match.

For example, if you wanted to search for "bag", "big", and "bug", but *not* "bog" you could use:
```js
let bagStr = "bag";
let bigStr = "big";
let bugStr = "bug";
let bogStr = "bog";
let regEx = /b[aiu]g/;
bagStr.match(regEx); // "bag"
bigStr.match(regEx); // "big"
bugStr.match(regEx); // "bug"
bogStr.match(regEx); // null
```

You can also match a range of characters, with a hyphen. Such as `[a-z]`, `[0-9]`, or `[a-r3-7]`. For example:
```js
let catStr = "cat";
let catStr = "bat";
let catStr = "mat";
let reGex = /[a-e]at/;
catStr.match(regEx); // "cat"
batStr.match(regEx); // "bat"
matStr.match(regEx); // null
```

##### Excluding characters
If you, instead, want to exclude characters, you can use *negated character sets*. Any characters placed inside `[^squarebrackets]` (with a caret, `^`, at the start) would be excluded. For example, if you wanted to find all characters except vowels you could use:
```js
/[^aeiou]/
```

##### Searching for patterns at the beginning of a string
Negated character sets can also be used to search for patterns at the beginning of strings. So for example:
```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString); // Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // Returns false
```

##### Searching for patterns at the end of a string
A `$` can be used to search for patterns at the end of a string. So for example:
```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // Returns false
```

##### Matching characters that do not occur
The `*` character lets you match instances of zero or more occurrences. For example:
```js
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result); // "Aaaaaaaaaaaaaaaa"
```

##### Consecutive characters
To group characters that appear consecutively you can use the `+` character. For example:
```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);
console.log(result); // "ss", "ss", not "s", "s", "s", "s",
```

##### Lazy matching
This can be used when you want to find the shortest possible match. So let's say you were to use the regex `/t[a-z]*i/` on the string `"titanic`. By default, this regex would return `"titani"`. But if you wanted the shortest possible match (i.e. `"ti"`) instead, you'd use a `?` to indicate you want to use lazy matching: `/t[a-z]*?i/`.
