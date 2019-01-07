# Basic JavaScript

## General
- JavaScript is case-sensitive. `myVar` != `MYVAR` or `myvar`. 
- Recommend using camelCase.

## Comments
Put `//` before text to make it a comment.

For multi-line comments, put the text like this `/* This is a
multi-line comment */`.

## Working with variables
These are how computers store and manipulate data dynamically. Basically, you use a label to point to some specific data, rather than use the data itself. Can think of them as being similar to x and y values in algebra, but also capable of representing more than just numbers.

Creating a variable is referred to as "declaring" a variable. To declare a variable, you'd usually put `var` in front of it, and a `;` after it. Variables can also be preceded with:
- `let`: to declare a variable within a very specific scope.
- `const`: to declare a variable that will never be changed.

So, for example, `var ourName;` declares a variable called ourName.

Variable names can be made up of numbers, letters, and `$` or `_`, but can't contain spaces or start with a number.

### Assigning values to variables
Values are stored with an *assignment* operator. Basically an `=`. So `myVar = 5` could also be described as "assigning the number 5 to `myVar`.

Example: `var myVar = 5;` creates a variable called `myVar` and assigns a value of `5` to it. This is also referred to as *initializing* the variable.

*Note:* when you get `NaN` (Not a Number) as an error code, this means you've forgotten to declare a variable, and it's tried to initialize... nothing. Similarly, `"undefined"` means that you've tried to concatenate a string that hasn't been defined.

## Working with numbers
The `number` data type represents numeric data. 

### Adding numbers
You can probably guess: `var sum = 10 + 10;` gives you a `sum` of `20`.

### Subtracting numbers
Ditto: `var difference = 45 - 33;` gives you a `difference` of `12`.

### Multiplying numbers
`var product = 8 * 10;` gives a `product` of `80`.
Can also multiply decimals: `var product = 2.0 * 2.5;` would give a `product` of `5`.

### Dividing numbers
`var quotient = 66 / 33;` gives a `quotient` of `2`.
Can also divide decimals: `var quotient = 4.4 / 2.0;` gives a `quotient` of `2.2`.

#### Remainders
Remainders operator is `%`. Unsurprisingly, it gives you the remainder. Basically, whatever is left over after dividing two numbers. Example: `5 % 2 = 1` (because it's what's left over afterwards).

This is often used to determine whether a number is even or odd (because if a `number % 2` has a remainder of `0` then that `number` is even).

### Increments (adding/subtracting 1 to/from a number)
Use `++` at the end of the number is basically n+1. But you don't even need to specify it in full, for example:
`n = n + 1` == `n++`.

Similarly, `--` also works to subtract 1.

### Compound assignment
Compounds are when you'd use, for example, `myVar += 5` in place of `myVar = myVar + 5;`. It performs the addition, etc., as well as the =.

Can be used for `+`, `-`, `*`, and `/`.

## Strings 
A *literal string* is another name for your bog standard string.

### Using quotes in strings
The simplest way to do this is to use both single quotes (`'`) and double quotes (`"`). If you use `"`s for the string then use `'`s for the quotes within it.

Alternatively, you can use a `\"` within the string to specify where quotes start and finish. Example: `var sampleStr = "Alan said, \"Peter is learning JavaScript\".";`
Which would `print` as `"Alan said, "Peter is learning JavaScript"."`

The `\` is referred to as an *escape string*, *escape sequences*, or *escapes*. Here's some more...

### Escape sequences
The following can be used:
- `\'`: single quote.
- `\"`: double quote.
- `\\`: backslash.
- `\n`: newline.
- `\r`: carriage return.
- `\t`: tab.
- `\b`: backspace.
- `\f`: form feed.

**Note:** There shouldn't be any spaces around escape sequences.

### Concatenating strings
`"My name is " + "Sam"` is the same as `My name is Sam`.

Can also do this with `+=` operator. So:
```js
var myName = "My name is ";
myName += "Sam";

console.log(myName); // Prints "My name is Sam"
```

### Getting a string length
Get the number of characters in a string using `.length`. So if `varName = "string"` then `varName.length` would output `6`.

### Bracket notation
This is how you get a character at a specific index in a string. JavaScript uses *zero-based indexing*, meaning the indexing starts at `0`, not `1`. Square brackets, `[` and `]` , and a number in between which is used to fetch the character you want. Example: 
```js
word = "string";
firstLetterOfWord = word[0];
```
#### Using bracket notation to get the last letter of a string
Easiest way to do this is to combine `.length` and bracket notation. But remember zero-based indexing!
Example:
```js
word = string;
var lastLetterOfString = word[word.length - 1];
```
Similar logic can be used to get the second/third/fourth/nth to last character of a string.

### Arrays
Arrays store several pieces of data in one place. Arrays fit between square brackets `[` and `]`. Example: `var sandwich = ["peanut butter", "jelly", "bread"]`.

Can nest an array within an array, which is referred to as a *multi-dimensional array*. Example: `[["Bulls", 23], ["White Sox", 45]]`
Accessing data in this situation can get a bit messy, for example:
```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```
Unlike strings, array entries are *mutable* and can be changed freely. In other words, you can change the data at index `0` of ourArray with, for example: 
```js
var ourArray = [50,40,30];
ourArray[0] = 15; // and ourArray now equals [15,40,30]
```
#### Indexes
Data within an array is accessed using an index. These are also *zero-based* (i.e. start at `0` rather than `1`).
Example: 
```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1]; // equals 60.
```
**Note:** As above, don't put any spaces between the array name and the square brackets.

#### Manipulating arrays 
Data can be both added or removed from an array.

##### Appending data
To append data to the end of an array use `.push()`. Basically pushes parameters to the end of the array. Example:
```js
var arr = [1,2,3];
arr.push(4); // And arr is now [1,2,3,4].
```

To append to the beginning of an array, use `unshift()`.
Example:
```js
var myArray = [["John", 23], ["dog", 3]];
myArray.unshift(["Paul", 35]); // Adds an array with ["Paul", 25] to the start of myArray.
```
##### Removing data
`.pop()` takes data element off the end of the array and returns that data element (so it can be used to store that last data element in another variable). 
Example:
```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Now returns [1, 4]
```
Similarly, `.shift()` takes it from the first data element in an array.
Example:
```js
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
```
This takes `["John", 23]` out of the array and stores it as a variable called `removedFromMyArray`.

## Working with functions
*Functions* are used for dividing up code into usable parts (like a mini-program within the script). 

They're usually used to: 
- Section off pieces of code, making it easier to manage.
- Run repeated operations.
- Or both.

They wrap around code blocks that contain *statements*, which will be run. They usually involve a combination of variables, operations, and conditions.

When run, a function will either:
- Give you an immediate result.
- Provide an output, a *return value* that can be used by other functions. 

### Building a function
Functions follow a standard structure:
1. The word `function`. 
2. A name, such as `myFunction`.
3. Parentheses `()`
4. Curly brackets, `{}`, that wrap around the code that will be run. Whatever is stored here is *called* (or *invoked*) when the function is used.

Basic example for defining (or *storing*) a function:
```js
function functionName() {
  console.log("Hello World");
}
```
They're usually defined just before they're called, which makes it easier for other people to read. To use (or *invoke* or *call*) a function:
```js
functionName(); // This would print "Hello World" in the console.
```
### Using parameters, for *arguments* sake
*Parameters* are variables that act as placeholders for values you want to input to a function when it is called. The act of inputting is also referred to as *passing*, and the act of calling a function is known as an *argument*.
Example: 
```js
function testFun(param1, param2) {
  console.log(param1, param2);
} // Sets up testFun with two parameters, and specifies how they should be called.
```
...and then:
```js
testFun("Hello", "World"); // Specifies what the parameters are that are passed to testFun. So this would log "Hello World" to the console.
```
Another example:
```js
function functionWithArgs(argument1, argument2) {
  console.log(argument1 + argument2);
}
functionWithArgs(3, 6); // Prints 9 in the console (the sum of 3 and 6).
```
**Note:** If you don't have a parameter/argument, `undefined` will be returned.

### Returning a value from a function
Basically a reverse-argument, `return` sends a value back out of a function (instead of passing it in).
Example:
```js
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // In this case, 8. So plusThree takes an argument for num, and returns a value equal to num + 3.`
```
Without *returning* a value you'll end up with *undefined* in the `console.log`.

### Defining the scope for functions
*Scope* is basically the visibility of variables. Variables defined outside of a function, with `var`, have *global scope* (are visible everywhere in the JavaScript code). Variables defined within a `function` have *local* scope (are only visible to that function).
Can have local and global variables with the same name, and the local variable will take precedence in this scenario.
Example:
```js
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
myOutfit();
```
### Queues
A `queue` is a data structure (i.e. array) where items are kept in order. Can add new items to the back of the queue, and remove old items from the front of the queue. 

#### Shifting items in a queue
Removes the first item from the queue and returns it.

#### Pushing items in a queue
Adds a new item to the back of the queue. Here's an example of both:
```js
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log(nextInLine(testArr, 6)) // This would log 1 to the console, and testArr would then be 2,3,4,5,6.
```

## Working with booleans
Either `true` (on) or `false` (off) (and without quotes). Here's how booleans become really useful...

### If statements
Used to make decisions in code, and act a bit like a switch. `if` statements will only execute the code under certain conditions (for example, when a statement is `true`). 

#### Comparison operators

##### Equality operators
Basically the `==` things (not to be confused with a plain old `=`, which is for assigning values to variables, etc). 
Compares two values, and returns `true` if they're equivalent, or `false` if they're not. Useful for If statements because they can be used to execute code under certain conditions. For example:
```js
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}

console.log(equalityTest(10)) // Would log "Equal" in the console.
```
Would execute the code in curly braces (returning "Equal") if myVal is equal to `10`.

##### Inequality operators
Basically, the `!=` (not equal) thing. There's also a *strict inequality* operator, which is `!==`.

##### Greater than operators
It's the `>` thing. Can also use `>=` for *greater than or equal to*.

##### Less than operators
It's the `<` thing. Can also use `<=` for *less than or equal to*. 

Comparison can also be done between integers `5` and strings `"5"`, which is called *type conversion*. There's also strict equality (`===`), which means the two have to be exactly the same (i.e. both integers, or both strings).

##### Using multiple operators
This is often referred to as the *logical and* operator. For JavaScript, this is a `&&`. Useful for scenarios like this, where you want to find the number between 5 and 10, but don't want to write out multiple *if* statements:
```js
if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```
Similarly, there's the *logical or*, which is `||` (each of these is apparently referred to as a *pipe symbol*):
```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```
This will return "Yes" only if num is between 5 and 10 (**5 and 10 included**).

### Else statements
So if the conditions inside an `if` statement are `false`, then what happens? Use an  `else` statement to take care of this:
```js
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
```
### Else if statements
Use this when there are multiple conditions that need to be addressed:
```js
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```
Keep in mind that these statements run in order from top to bottom, so be careful which statement goes first, etc.

#### Switch statements
Similar to `if`, `else`, and `else if` statements, but good if you have lots of statements. Example:
```js
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      return("alpha");
      break;
    case 2:
      return("beta");
      break;
    case 3:
      return("gamma");
      break;
    case 4:
      return("delta");
      break;
  }
  return answer;  
}
```
Here, each `case` is a possible statement. Adding `caseInSwitch(3);` to the end, for example, would result in `"gamma"` being logged in the console.
The code for each `case` is run until a `break;` is encountered. If there's no `break`, all the statements will be run, as a group, until there is a break (if that makes sense). So for:
```js
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}
```
`case`s 1, 2, and 3 will produce the same result.

Can also make a `switch` statement default, which effectively makes it the final `else` statement. In other words, if there's no matching `case` then the default is used:
```js
function switchOfStuff(val) {
  var answer = "";
  switch(val) {
    case "a":
      return("apple");
      break;
    case "b":
      return("bird");
      break;
    case "c":
      return("cat");
      break;
    default:
      return("stuff");
      break;
  }
  return answer;  
}
```
#### Return
`return` is used to end a function. So for this:
```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

`"byebye"` will never be logged, because the `return` essentially ends/exits the function.

#### Typeof operators
Use these to determine what type of data a variable or value is:
```
typeof 3 // returns 'number'
typeof '3' // returns 'string'
```

## Working with objects
Similar to *arrays*, but data is accessed using *properties*. They're for storing structured data. For example, this cat (with the properties of the `cat` stored as strings):
```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```
**Note:**
- For single-word string properties you don't need the quotes (i.e. `~~"name"~~` can be `name`).
- Use a comma between each property, instead of a semi-colon.

### Accessing properties
Properties within an array can be accessed with:
- Dot notation: a `.`
- Bracket notation: the `[` and `]`, like you would for an array. You'll also need to use this one if the object has a space in it.

#### With dot notation
```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```

#### With bracket notation
```js
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"]; 
```

#### Accessing properties with variables
Very similar to bracket notation, but with values stored as variables. This can be really useful for tasks like accessing a lookup table.
```js
var dogs = {
  Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```
#### Updating an object property
Take an object like `ourDog`:
```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
Properties, such as the `name`, can be updated using either:
- Dot notation: `ourDog.name = "Doggy";`
- Bracket notation: `ourDog["name"] = "Doggy";`

So now if we accessed `ourDog.name`, it will have changed from `"Camper"` to `"Doggy"`.

#### Adding properties to an object
Take an object like `ourDog`:
```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
We can add a property, such as `bark`, to the object using either:
- Dot notation: `ourDog.bark = "Bow-wow";`
- Bracket notation: `ourDog["bark"] = "Bow-wow";`

So now we can access `ourDog.bark`, which has a value of `"Bow-wow"`.

#### Deleting properties from an object
Take an object like `ourDog`:
```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "Woof"
};
```
To delete the `bark` property, we would use `delete ourDog.bark;`.

### Object lookups
Objects work a bit like an index, using keys:values to store data. Here's an example of a lookup:
```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```

### Checking an object for a property
To check whether a property exists within an object you can use the `.hasOwnProperty(propertyname)` method. This returns either `true` or `false`, depending on whether the property was found. For example:
```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false
```

### Handling complex objects
JavaScript Object Notation (JSON) is often used to handle more complex data objects, where you can nest arrays within arrays, such as the `formats` here:
```js
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```
When using JSON, a comma needs to be placed after each object in the array, except the last one.

#### Accessing nested objects
This can be done with either dot or bracket notation, as shown below:
```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2; // "secrets"
ourStorage.desk.drawer; // "stapler"
```
**Note:** If the object has a space in the name, use bracket notation.

#### Accessing nested arrays
Array bracket notation can be used to access objects in nested arrays:
```js
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree = myPlants[1].list[1]; // "pine"
```