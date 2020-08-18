# Functional programming

This is a programming approach where the program is broken down into small, testable parts (i.e. functions). Each functional solution should be:

- Simple and isolated
- Without any side effects happening outside the scope of the function (i.e. functions should be _pure functions_ - Google it)
- Don't alter a variable or object - instead create new variables and objects and return these from a function.
- Declare dependencies explicitly (if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.)

In other words:

**Input** => **Process** => **Output**

Some key terms for functional programming:

- _Callbacks_: Functions that are passed into another function, to decide whether that function should be invoked. For example, `filter` is a callback that tells a function how to filter an array.
- _First class functions_: These can be assigned to a variable, passed into another function, or returned from another function like any other value can be. In JavaScript, all functions are first class functions.
- _Higher order functions_: Functions that take a function as an argument, or return a function as a return value. The functions that are are passed or returned are called a _lambda_.

Here's an example of how a higher order function, `getTea`, can be used to accept the lambdas `prepareGreenTea` and `prepareBlackTea`:

```js
const prepareGreenTea = () => "greenTea";

const prepareBlackTea = () => "blackTea";

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
```
