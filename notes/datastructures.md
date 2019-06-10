# Basic data structures
Data can be stored and accessed in many different ways. Here we cover arrays and objects, and how to use bracket and dot notation to manipulate them, and copy and use information from them.

## Using arrays

### Getting the length
All arrays have a length, which can be accessed using `arrayName.length`:
```js
let oneDimensionalArray = [1, 2, 3, 4, 5];
console.log(oneDimensionalArray.length) // Logs 7
```

### Accessing contents using bracket notation
Bracket notation is a common way to access the content of an array (the other one being dot notation).

Each item in an array has an *index*. In JavaScript, arrays are *zero-indexed*, which means that the first item in the array is at position zero. We can use the index of an array to access or manipulate the data within it.

For example, to access the third item (which is at index `2`) in our `oneDimensionalArray`:
```js
let oneDimensionalArray = [1, 2, 3, 4, 5];
let oneVariable = oneDimensionalArray[2];
console.log(oneVariable); // Logs the third item in the array: 3
```

### Manipulating contents using bracket notation
You can also use bracket notation to manipulate the contents of an array.

For example, to change the third item (which is at index `2`) in our `oneDimensionalArray`:
```js
let oneDimensionalArray = [1, 2, 3, 4, 5];
oneDimensionalArray[2] = "three";
console.log(oneDimensionalArray); // Logs [1, 2, "three", 4, 5]
```

### Adding items to an array
The length of an array is not fixed, and the number of items within it can be added and removed. Two methods often used to do this are:
- `.push()`: Adds items to the end of the array.
- `.unshift()`: Adds items to the beginning of the array.

Here's an example of how you can use both to add items to an array, `romanNumerals`:
```js
let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];

romanNumerals.unshift("XIX", "XX");
console.log(romanNumerals); // Logs ["XIX", "XX", "XXI", "XXII"]

romanNumerals.push(twentyThree);
console.log(romanNumerals); // Logs ["XIX", "XX", "XXI", "XXII", "XXIII"]
```

### Removing an item from an array
Two methods often used to remove items from an array are:
- `.pop()`: Removes items from the end of the array.
- `.shift()`: Removes items from the beginning of the array.

Here's an example of how you can use both to remove items from an array, `greetings`, and assign one of them to a variable, `dutchGreeting`:
```js
let greetings = ["What's up?", "Hello!", "Hoi!"];

let dutchGreeting = greetings.pop(); // Remove "Doei" from end of array, and assign it to `dutchGreeting`

greetings.shift();
console.log(greetings); // Logs ["Hello!"]
```

### Removing multiple items from an array
Because removing multiple consecutive items from an array with `.pop()` and `.shift()` is inconvenient, JavaScript also has `.splice()`. This can be used to remove any number of consecutive items from an array, by specifying parameters that indicate the starting point, and the number of items to remove.

For example, to start at index `4` and remove `3` items:
```js
let array = ["Well,", "this", "is", "a", "really", "really", "really", "long", "array!"];
array.splice(4, 3);

console.log(array); // ["Well,", "this", "is", "a", "long", "array!"]
```

You can also use `.splice()` to replace (or swap out) the items you removed. This is done by specifying the items you want to swap them out with as additional parameters for `.splice()`. For example:
```js
function htmlColourNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(htmlColourNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
// Logs [ "DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick" ]
```

### Copying array items
If you want to access and use (in other words *extract*) multiple items from an array, use `.slice()`. This method leaves the original array unchanged.

You can use this to create a new array from an existing array. For example, to get the values between index `2` and `4` of the `forecast` array:
```js
function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); // Logs ['warm', 'sunny']
```

**Note:** Extraction occurs up to, but not including, the second parameter. This is why it's not `arr.slice(2, 3)`.

## Using objects
Placeholder text for upcoming notes.
