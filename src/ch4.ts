export function add(a: number, b: number): number {
  return a + b;
}

// Named function
function greet(name: string) {
  return 'hello ' + name;
}

// Function expression
let greet2 = function (name: string) {
  return 'hello ' + name;
};

// Arrow function expression
let greet3 = (name: string) => {
  return 'hello ' + name;
};

// Shorthand arrow function expression
let greet4 = (name: string) => 'hello ' + name;

// Function constructor
let greet5 = new Function('name ', 'return "hello " + name');

// evaluates to 3
add(1, 2);

// evaluates to 'hello Crystal'
greet('Crystal');

// Optional and Default Parameters

function log(message: string, userId?: string) {
  let time = new Date().toLocaleDateString();
  console.log(time, message, userId || 'Not signed in');
}
log('Page loaded');
log('User signed in', 'da763be');

function log2(message: string, userId = 'Not signed in') {
  let time = new Date().toISOString();
  console.log(time, message, userId);
}
log2('User clicked on a button', 'da763be');
log2('User signed out');

type Context = {
  appId?: string;
  userId?: string;
};

function log3(message: string, context: Context = {}) {
  let time = new Date().toISOString();
  console.log(time, message, context.userId);
}

// Rest Parameters

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
// evaluates to 6
sum([1, 2, 3]);

// function sumVariadic(): number {
//   return Array.from(arguments).reduce((total, n) => total + n, 0);
// }
// // evaluates to 6
// sumVariadic(1, 2, 3);

function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
// evaluates to 6
sumVariadicSafe(1, 2, 3);

interface Console {
  log(message?: any, ...optionalParams: any[]): void;
}

// call, apply, and bind
function add2(a: number, b: number): number {
  return a + b;
}
add2(10, 20); // evaluates to 30
add2.apply(null, [10, 20]); // evaluates to 30
add2.call(null, 10, 20); // evaluates to 30
add2.bind(null, 10, 20)(); // evaluates to 30

// Typing this

let x = {
  a() {
    return this;
  },
};
x.a(); // this is the object x in the body of a()

let a = x.a;
a(); // now, this is undefined in the body of a()

// Generator Functions
function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
let fibonacciGenerator = createFibonacciGenerator(); // IterableIterator<number>
fibonacciGenerator.next(); // evaluates to {value: 0, done: false}
fibonacciGenerator.next(); // evaluates to {value: 1, done: false}
fibonacciGenerator.next(); // evaluates to {value: 1, done: false}
fibonacciGenerator.next(); // evaluates to {value: 2, done: false}
fibonacciGenerator.next(); // evaluates to {value: 3, done: false}
fibonacciGenerator.next(); // evaluates to {value: 5, done: false}

function* createNumbers(): IterableIterator<number> {
  let n = 0;
  while (1) {
    yield n++;
  }
}
let numbers = createNumbers();
numbers.next(); // evaluates to {value: 0, done: false}
numbers.next(); // evaluates to {value: 1, done: false}
numbers.next(); // evaluates to {value: 2, done: false}

// Iterators
let numbers2 = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  },
};

// Iterate over an iterator with for-of
for (let a of numbers) {
  // 1, 2, 3, etc.
}

// Spread an iterator
let allNumbers = [...numbers]; // number[]

// Destructure an iterator
let [one, two, ...rest] = numbers; // [number, number, number[]]

// Call Signatures
function sum2(a: number, b: number): number {
  return a + b;
}

// Type Level And Value Level Code
function area(radius: number): number | null {
  if (radius < 0) {
    return null;
  }
  return Math.PI * radius ** 2;
}

let r: number = 3;
let b = area(r);
if (b !== null) {
  console.info('result: ', b);
}

// function greet(name: string)
type Greet = (name: string) => string;

// function sumVariadicSafe(...numbers: number[]): number
type SumVariadicSafe = (...numbers: number[]) => number;

// function long(message: string, userId?: string)

// Shorthand call signature
//type Log4 = (message: string, userId?: string) => void;

// Full call signature
type Log4 = {
  (message: string, userId?: string): void;
};
let log4: Log4 = (message, userId = 'Not signed in') => {
  let time = new Date().toISOString();
  console.log(time, message, userId);
};

// Contextual Typing
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}
times((n) => console.log(n), 4);

type Reservation = {
  id: string;
};

// Overloaded Function
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation;
};

let reserve: Reserve = (from, to, destination) => {
  return { id: '' };
};

type Reservation2 =
  | {
      id: string;
    }
  | undefined;

type Reserve2 = {
  (from: Date, to: Date, destination: string): Reservation2;
  (from: Date, destination: string): Reservation2;
};

let reserve2: Reserve2 = (from: Date, toOrDestination: Date | String, destination?: string) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
    return { id: '' };
  } else if (typeof toOrDestination === 'string') {
    // Boo a round trip
    return { id: '' };
  }
};

// Polymorphism
