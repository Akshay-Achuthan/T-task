/*
//* Example 1 

let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; //! setting the prototype

console.log(rabbit.eats);
console.log(rabbit.jumps);
*/

//* Example 2

/*
let animal = {
  eats: true,
  walk() {
    alert("Animal Walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

rabbit.walk();
console.log(rabbit.eats);
console.log(rabbit.jumps);
*/

//* Exapmle 3

/*
let animal = {
  eats: true,
  walk() {
    alert("Animal Walk");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let tigger = {
  attack: true,
  __proto__: rabbit,
};

console.log(rabbit.eats);
tigger.walk();
console.log(tigger.jumps);
console.log(tigger.eats);
*/

//* Example 4

/*
let animal = {
  eats: true,
  walk() {
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function () {
  alert("Rabbies");
};

rabbit.walk();
*/

//* Example 5

/*
let user = {
  name: "john",
  surname: "smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    console.log(`${this.name} ${this.surname} `);
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

admin.fullName = "akshay achuthan";
admin.fullName;

user.fullName;
*/

//* Exapmle 6

/*
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert("I walk");
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: "white rabbit",
  __proto__: animal,
};

rabbit.sleep();
// animal.sleep();
rabbit.walk();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);
*/

//* Example 7

/*
let animal = {
  eats: true,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

// alert(Object.keys(rabbit));

for (let r in rabbit) alert(r);
*/

//* Example 8

/*
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (r in rabbit) {
  let isOwn = rabbit.hasOwnProperty(r);
  if (isOwn) {
    alert(`our: ${r}`);
  } else {
    alert(`Inherited ${r}`);
  }
}
*/

//! Exercise

/*
let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps);
delete rabbit.jumps;
alert(rabbit.jumps);
delete animal.jumps;
alert(rabbit.jumps);
*/

//! Exercise

/*
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);
console.log(pockets.glasses);
console.log(head.glasses);

*/

//! Exercise

/*
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

*/

//! Exercise

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

speedy.eat("apple");
alert(speedy.stomach);

alert(lazy.stomach);
