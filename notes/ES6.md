# ECMAscript 6
JavaScript is based on ECMAScript (or ES). This is constantly evolving, with the latest version (ES6) being released in 2015.

This new version allows for some additional functionality, such as:
- Arrow functions
- Classes
- Modules
- Promises
- Generators
- `let` and `const`

**Note:** Even though it was released back in 2015, not all browsers support ES6 yet.

## `let`
In many ways `var` and `let` work identically. But with `var`, you can overwrite a variable with the same name that you declared previously. This can cause issues, especially in larger code bases, where you may do this accidentally. By using `let`, any attempt to overwrite will throw an error in the console.

### Strict Mode
By declaring `"use strict"`, you'll enable strict mode. This catches a bunch of common coding mistakes, such as variables not being declared correctly.

## `const`
Basically a `const`ant variable, that is read-only (so cannot be overwritten). It's common practice to use UPPER_CASE (separated with underscores) when naming `const`s.
