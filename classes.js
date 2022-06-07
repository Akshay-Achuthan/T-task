////////////////////////////////////////////////////////todo
//!                Class basic syntax
////////////////////////////////////////////////////////todo

////////////////////////////////////////////*
//!            the class syntax
////////////////////////////////////////////*

// class MyClass {
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

//* example

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     alert(this.name);
//   }
// }
// let user = new User("john");
// user.sayHi();

////////////////////////////////////////////*
//!            class expression
////////////////////////////////////////////*

// let User = class {
//   sayHi() {
//     alert("Hello");
//   }
// };

//* example

// let User = class MyClass {
//   sayHi() {
//     alert(MyClass);
//   }
// };
// new User().sayHi();
// alert(MyClass);

////////////////////////////////////////////*
//!            getters/setters
////////////////////////////////////////////*

//* example

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       alert("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }
// }
// let user = new User("John");
// alert(user.name);
// user = new User("");

//* computed names[...]

// class User {
//   ["say" + "Hi"]() {
//     alert("hello");
//   }
// }
// new User().sayHi();

//* class fields

// class User {
//   name = "John"; //! class field
//   sayHi() {
//     alert(`Hello, ${this.name}!`);
//   }
// }
// new User().sayHi();

//* Task

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
// let clock = new Clock({ template: "h:m:s" });
// clock.start();

////////////////////////////////////////////*
//!            class inheritance
////////////////////////////////////////////*

//* example
/*
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still`);
  }
}

let animal = new Animal("My Animal");

//! rabbit has access to animal methods an its own methods
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White rabbit");
rabbit.run(5);

*/
