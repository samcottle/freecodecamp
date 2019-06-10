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

## Using objects
Placeholder text for upcoming notes.
