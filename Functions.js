//////////////////////////////////////////////todo
//*            RECURSION AND STACK
//////////////////////////////////////////////todo

//* problem
//! pow(2,2) = 4;

//* using for loop

// function pow(x, n) {
//   let result = 1;

//   for (i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }
// console.log(pow(2, 3));

//* using Recursion

// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// console.log(pow(2, 3));`

//* using conditional statement

// function pow(x, n) {
//   return n == 1 ? x : x * pow(x, n - 1);
// }

// pow(2, 4);

//* Recurisve Traversals

// let company = {
//   sales: [
//     {
//       name: "John",
//       salary: 1000,
//     },
//     {
//       name: "Alice",
//       salary: 1600,
//     },
//   ],

//   development: {
//     sites: [
//       {
//         name: "Peter",
//         salary: 2000,
//       },
//       {
//         name: "Alex",
//         salary: 1800,
//       },
//     ],

//     internals: [
//       {
//         name: "Jack",
//         salary: 1300,
//       },
//     ],
//   },
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep);
//     }
//     return sum;
//   }
// }

// alert(sumSalaries(company));

////////////////////////////////////////////////////////*
//!     sum all number till the given one
////////////////////////////////////////////////////////*

//* using for loop

// const sumTo = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// };

// sumTo(100);

//* using Recursion

// function sumTo(n) {
//   return n == 1 ? n : n + sumTo(n - 1);
// }

// console.log(sumTo(5));

//! OR

// function sumTo(n) {
//   if (n == 1) {
//     return 1;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }

// console.log(sumTo(100));

//* using formula

// function sumTo(n) {
//   return (n * (n + 1)) / 2;
// }

// console.log(sumTo(100));

////////////////////////////////////////////////////////*
//!             Calculate factorial
////////////////////////////////////////////////////////*

//? using for and if

// let num = 5;
// console.log(num);

// if (num === 0) {
//   console.log(`factorial of 1 is ${num}`);
// } else if (num < 0) {
//   console.log(`Please enter a positive number`);
// } else {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact *= i;
//   }
//   console.log(fact);
// }

//? conditionals

// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }

// console.log(factorial(5));

////////////////////////////////////////////////////////*
//!                 Fibonacci
////////////////////////////////////////////////////////*

//  1 1 2 3 5 8

// function fibo(n) {
//   return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
// }

// console.log(fibo(3));

//? swapping

// function fibo(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// console.log(fibo(7));

////////////////////////////////////////////////////////*
//!              single linked list
////////////////////////////////////////////////////////*

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

//? using While

// function printList(list) {
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

//? using if

// function printList(list) {
//   alert(list.value); // output the current item

//   if (list.next) {
//     printList(list.next); // do the same for the rest of the list
//   }
// }

// printList(list);

// printList(list);

////////////////////////////////////////////////////////*
//!        single linked list in the reverse order
////////////////////////////////////////////////////////*

//? using recursion

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function printReverseList(list) {
//   if (list.next) {
//     printReverseList(list.next);
//   }

//   console.log(list.value);
// }

// printReverseList(list);

//////////////////////////////////////////////todo
//*      REST PARAMETERS AND SPREAD SYNTAX
//////////////////////////////////////////////todo

// function sum(a, b) {
//   return a + b;
// }

// //! no errors it will take only the needed/passed arguments in this case the first two i.e (1,2)

// console.log(sum(1, 2, 3, 4, 5));

//* spread operator

// function sumAll(...args) {
//   let sum = 0;

//   for (let arg of args) sum += arg;
//   return sum;
// }

// console.log(sumAll(1));
// console.log(sumAll(1, 2, 3));
// console.log(sumAll(1, 5, 6, 7, 2));

//* example

// function showName(firstName, lastName, ...others) {
//   console.log(`my full name is ${firstName}  ${lastName}`);
//   console.log(others.length);
// }

// showName("akshay", "achuthan", "rahul", "krishhna");

//* max method

// let arr = [3, 5, 1];
// alert( Math.max(...arr) );

//* from method

// let str = "Hello";
// alert(Array.from(str));

//* copy an array or an object

//* array

// let arr = [1, 2, 3];
// let arrCopy = [...arr];

// alert(JSON.stringify(arr) === JSON.stringify(arrCopy));

// alert(arr === arrCopy);

// arr.push(4);
// alert(arr);
// alert(arrCopy);

//* object

// let obj = { a: 1, b: 2, c: 3 };

// let objCopy = { ...obj };

// alert(JSON.stringify(obj) === JSON.stringify(objCopy));

// alert(obj === objCopy);

// obj.d = 4;
// alert(JSON.stringify(obj));
// alert(JSON.stringify(objCopy));

//////////////////////////////////////////////todo
//*        Variable Scope and Closure
//////////////////////////////////////////////todo

//* example 1

// {
//   let message = "Hello";
//   alert(message);
// }
// alert(message);

//* example 2

// {
//   let message = "Hello";
//   alert(message);
// }

// {
//   let message = "Goodbye";
//   alert(message);
// }

//* example 3

// let message = "Hello";
// alert(message);

// let message = "Goodbye"; //! Error already declared
// alert(message);

//* exapmle 4

// if (true) {
//   let phrase = "Hello!";
//   alert(phrase);
// }
// alert(phrase); //! Error

//* example 5 (nested functions)

// function sayHiBye(firstName, lastName) {
//   function getFullName() {
//     return firstName + " " + lastName;
//   }

//   alert("Hello, " + getFullName());
//   alert("Bye, " + getFullName());
// }
// sayHiBye("akshay", "achuthan");

//* Task - 1 (Does a function pick up latest change )

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }
// name = "Pete"; //? latest update will be affected
// sayHi();

//* Task 2 (which variables are available)

// function makeWorker() {
//   let name = "Pete"; //? block scope

//   return function () {
//     alert(name);
//   };
// }
// let name = "John"; //? global scope
// let work = makeWorker();
// work();

//* Task 3 (are counters independent)

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert(counter());
// alert(counter());

// alert(counter2());
// alert(counter2()); //? counter 2 is independent

//* Task 4 (counter object)

// function Counter() {
//   let count = 0;

//   this.up = function () {
//     return ++count;
//   };

//   this.down = function () {
//     return --count;
//   };
// }
// let counter = new Counter();
// alert(counter.up());
// alert(counter.up());
// alert(counter.down());

//* Task 5 (function in if)

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
//   //! function should be called here
// }
// sayHi(); //! Error outer its scope

//* task 6 (sum with closures)

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(2)(4));

//* task 7 (is variable visible)

// let x = 1;
// function func() {
//   console.log(x); //! error cannot access x before initialization

//   let x = 2;
// }
// func();

//* task 8 (filter through function)

//* filter in between

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert(arr.filter(inBetween(3, 6)));

//* filter in array

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// alert( arr.filter(inArray([1, 2, 10])) );

//* task 9 (sort by field)

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// function byField(fieldName) {
//   return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
// }
// console.log(users.sort(byField("name")));
// console.log(users.sort(byField("age")));

//* task 10 (Army of functions)

// function makeArmy() {
//   let shooters = [];

//   for (let i = 0; i < 10; i++) {
//     let shooter = function () {
//       alert(i);
//     };
//     shooters.push(shooter);
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0]();
// army[5]();

//////////////////////////////////////////////todo
//*          Function object NFE
//////////////////////////////////////////////todo

//* name property

// function sayHi() {
//   alert("Hi");
// }

// alert(sayHi.name); //! can access function names using the name property

//* similar ex-1
//* similar ex-1

// let sayHi = function() {
//   alert("Hi");
// };

// alert(sayHi.name);

//* similar ex-2

// function f(sayHi = function() {}) {
//   alert(sayHi.name);
// }
// f();

//* similar ex-3

// let user = {
//   sayHi() {},
//   sayBye: function () {},
// };
// alert(user.sayHi.name);
// alert(user.sayBye.name);

//* length property

// function f1(a) {}
// function f2(a, b) {}
// function many(a, b, ...more) {} //! rest parameters are not counted
// alert(f1.length);
// alert(f2.length);
// alert(many.length);

//* example

// function ask(question, ...handlers) {
//   let isYes = confirm(question);

//   for (let handler of handlers) {
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }
// }
// ask(
//   "Question?",
//   () => alert("You said yes"),
//   (result) => alert(result)
// );

//* custom properties

// function sayHi() {
//   alert("Hi");
//   sayHi.counter++;
// }
// sayHi.counter = 0;
// sayHi();
// sayHi();
// alert(`Called ${sayHi.counter} times`);

//* named function expression

// let sayHi = function (who) {
//   alert(`Hello, ${who}`);
// };
