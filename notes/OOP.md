# Object Oriented Programming

Objects are things that you can observe and interact with. A car has wheels, a shop has items, and an object has *properties*.

Here's an example of what a two-legged duck called Dave would look like as a JavaScript object:

```js
let duck = {
  name: "Dave",
  numLegs: = 2
};
```

## Accessing properties

The properties within a JavaScript object can be accessed using, for example, dot notation.

```js
console.log("The duck is called " + duck.name + ", and it has " + duck.numLegs + " legs.")

// Prints "The duck is called Dave, and it has 2 legs." in the console.
```

Objects can also have a special type of property, called a *method*. This is a property that also acts as a function.

Here's another example of the `duck` object, this time with a method called `sayName`:

```js
let duck = {
  name: "Dave",
  numLegs: 2,
  sayLegs: function() {return "This duck has " + duck.numLegs + " legs."}
};

duck.sayLegs();
```

When `duck.sayLegs` is called, the string `"This duck has 2 legs."` is returned.

### Using `this`

While the above example works as expected for now, if the variable name was to change from `duck` to something else this code would no longer work (until it is updated, at least). To avoid these situations, this can be avoided with the `this` keyword.

This is how this method can be expressed with the `this` keyword:

```js
let duck = {
  name: "Dave",
  numLegs: 2,
  sayLegs: function() {return "This duck has " + this.numLegs + " legs."}
};

duck.sayLegs();
```

## Using constructors

A *constructor* is a function that creates new objects. They are like a template or blueprint, defining which properties and behaviours will belong to the new object.

Here is an example of a contructor:

```js
function Duck() {
  this.name = "Dave";
  this.color = "brown";
  this.numLegs = 2;
}
```

This defines the `Duck` object as having the properties `name`, `color`, and `numLegs`, which are set to `Dave`, `brown`, and `2`.

Note that constructors:

- Are functions that define properties and behaviours, rather than returning a value.
- Should use `this` to set the properties of the object they will create (making them more scalable).
- Are declared with a capitalised name. This makes them more distinguishable from other functions.

### Calling a constructor

When you want to call a constructor, use the `new` operator. For example, to create a new instance of `Duck` you would use:

```js
let anotherDuck = new Duck();
```

The properties of `anotherDuck` can then be accessed and modified:

```js
anotherDuck.name = "Randy";
anotherDuck.name; // Returns "Randy"
```

But creating a new `Duck`, and then modifying its values takes quite a lot of work, especially when you have hundreds or thousands of `Duck`s that you need to keep track of. So instead you can design your constructor to accept parameters (in this case `name` and `color`):

```js
function Duck(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

You can then create a new instance of `Duck` like this:

```js
let anotherDuck = new Duck("Barry", "White");
```

In this case `anotherDuck` was created with the following properties:

```js
anotherDuck.name // "Barry"
anotherDuck.color // "White"
anotherDuck.numLegs // 2
```

`name`, `color`, and `numLegs` are called *own* properties, because they were defined directly in `Duck`. Every instance of `Duck` will have these properties.

To check whether an object was created with a constructor, you can use `instanceof`. For example, to check whether `anotherDuck` was created with the contructor `Duck`:

```js
anotherDuck instanceof Duck; // true
```

To loop through the properties in `Duck` and store them in an array called `duckProps`, you would use:

```js
function Duck(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let anotherDuck = new Duck("Barry", "White");

let duckProps = [];

for (let property in anotherDuck) {
  if(anotherDuck.hasOwnProperty(property)) {
    duckProps.push(property);
  }
}

console.log(duckProps); // ["name", "color", "numLegs"]
```

### Using prototypes

Every instance of `Duck` will have the same `numLegs` (they will all have **2**). This is not a problem when you only have several `Duck`s, but once you start accumulating hundreds, thousands, or millions of `Duck`s it becomes innefficient to have all of those duplicated variables being stored.

What you can do instead is use a *prototype* (which is effectively the opposite of an *own* property; own properties are defined by the object instance, and prototype properties are defined by the prototype). The properties stored in a prototype for `Duck` will be shared in **all** instances of `Duck`. Here's what this prototype would look like:

```js
Duck.prototype.numLegs = 2;
```

All instances of `Duck` will now have the `numLegs` property with a value of **2**:

```js
function Duck(name, color) {
  this.name = name;
  this.color = color;
}

Duck.prototype.numLegs = 2;

let anotherDuck = new Duck("Barry", "White");

console.log(anotherDuck); // Object {color: "White", name: "Barry", numLegs: 2}
```

To loop through the properties in `anotherDuck`, and separate these into *own* and *prototype* properties you would use:

```js
function Duck(name, color) {
  this.name = name;
  this.color = color;
}

Duck.prototype.numLegs = 2;

let anotherDuck = new Duck("Barry", "White");

let ownProps = [];
let prototypeProps = [];

for (let property in anotherDuck) {
  if (anotherDuck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property)
  }
}

console.log("The own properties are " + ownProps + ". The prototype properties are " + prototypeProps + "."); 
// "The own properties are name,color. The prototype properties are numLegs."
```
