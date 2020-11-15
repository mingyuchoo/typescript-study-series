/**
 * Chapter 3. All About Types
 */

import { fips } from 'crypto';
import { isIdentifier } from 'typescript';

// 3.1
export function squareOf(n: number): number {
  return n * n;
}

// 3.2.1 any
export function anyTypeExample(): number {
  let result = 0;

  let a: any = 666; // any
  let b: any = ['obj']; // any
  let c = a + b; // any

  return result;
}

// 3.2.2 unknown
export function unknownTypeExample(): number {
  let result = 0;

  let a: unknown = 30; // unknown
  let b = a === 123; // boolean
  // let c = a + 10;   // --> Error TS2571: Object is of type 'unknown'
  if (typeof a === 'number') {
    let d = a + 10; // number
  }

  return result;
}

// 3.2.3 boolean
export function booleanTypeExample(): number {
  let result = 0;

  let a = true; // boolean
  var b = false; // boolean
  const c = true; // true
  let d: boolean = true; // boolean
  let e: true = true; // true
  let f: false = false; // false
  // let f: true = false; // --> Error TS2322: Type 'false' is not assignable to type 'true'

  return result;
}

// 3.2.4 number
export function numberTypeExample(): number {
  let result = 0;

  let a = 1234; // number
  var b = Infinity * 0.1; // number
  const c = 5678; // 5678
  let d = a < b; // boolean
  let e: number = 100; // number
  let f: 26.218 = 26.218; // 26.218
  // let g: 26.218 = 10; // --> Error TS2322: Type '10' is not assignable to type '26.218'

  return result;
}

// 3.2.5 bigint
export function bigintTypeExample(): number {
  let result = 0;
  //change "target" of tsconfig.json file to "target": "esnext"

  let a = 1234n; // a is bigint
  const b = 5678n; // b is 5678n
  var c = a + b; // c is bigint
  let d = a < 1235; // d is boolean
  // let e = 88.5n;  // --> A bigint literal must be an integer.ts(1353)
  let f: bigint = 100n; // f is bigint
  let g: 100n = 100n; // 100n
  // let h: bigint = 100; // --> Type 'number' is not assignable to type 'bigint'.ts(2322)

  return result;
}

// 3.2.6 string
export function stringTypeExample(): number {
  let result = 0;

  let a = 'hello'; // a is string
  var b = 'billy'; // b is string
  const c = '!'; // c is '!'
  let d = a + ' ' + b + c; // d is string
  let e: string = 'zoom'; // e is string
  let f: 'john' = 'john'; // f is "john"
  // let g: 'john' = 'zoe'; // --> Type '"zoe"' is not assignable to type '"john"'.ts(2322)

  return result;
}

// 3.2.7 symbol
export function symbolTypeExample(): number {
  let result = 0;

  let a = Symbol('a'); // a is symbol
  let b: symbol = Symbol('b'); // b is symbol
  let c = a === b; // c is boolean
  // let d = a + 'x'; // --> error TS2469: The '+' operator cannot be applied to type 'symbol'.
  const e = Symbol('e'); // e is unique symbol
  const f: unique symbol = Symbol('f'); // f is unique symbol
  // let g: unique symbol = Symbol('g'); // --> A variable whose type is a 'unique symbol' type must be 'const'.ts(1332)
  let h = e === e; // h is boolean
  // let i = e === f; // --> This condition will always return 'false' since the types 'typeof e' and 'typeof f' have no overlap.ts(2367)
  return result;
}

// 3.2.8 object
export function objectTypeExample(): number {
  let result = 0;

  let a: object = {
    x: 'x',
  }; // a is object

  let b = {
    x: 'x',
  }; // b is { c: string; }

  let c = {
    x: {
      y: 'y',
    },
  }; // c is { x: { y: string; }}

  let d: { x: number } = { x: 12 }; // d is { x: number; }

  let e: {
    firstName: string;
    lastName: string;
  } = {
    firstName: 'john',
    lastName: 'barrowman',
  }; // e is { firstName: string; lastName: string; }

  class Person {
    constructor(public firstName: string, public lastName: string) {}
  }

  e = new Person('matt', 'smith'); // // e is { firstName: string; lastName: string; }

  let f: { x: number };
  // f = {}; // --> Property 'x' is missing in type '{}' but required in type '{ x: number; }'.ts(2741)

  let obj1: {}; // obj1 is {}
  obj1 = {};
  obj1 = ['a'];
  obj1 = function () {};
  obj1 = new String('a');
  obj1 = 'a';
  obj1 = 1;
  obj1 = Symbol('a');
  // obj1 = null; // --> Type 'null' is not assignable to type '{}'.ts(2322)
  // obj1 = undefined; // --> Type 'undefined' is not assignable to type '{}'.ts(2322)

  let obj2: object; // obj2 is object
  obj2 = {};
  obj2 = ['a'];
  obj2 = function () {};
  obj2 = new String('a');
  // obj2 = 'a'; // --> Type 'string' is not assignable to type 'object'.ts(2322)
  // obj2 = 1; // --> Type 'number' is not assignable to type 'object'.ts(2322)
  // obj2 = Symbol('a'); // --> Type 'symbol' is not assignable to type 'object'.ts(2322)
  // obj2 = null; // --> Type 'null' is not assignable to type 'object'.ts(2322)
  // obj2 = undefined; // --> Type 'undefined' is not assignable to type 'object'.ts(2322)

  let obj3: Object; // obj3 is Object
  obj3 = {};
  obj3 = ['a'];
  obj3 = function () {};
  obj3 = new String('a');
  obj3 = 'a';
  obj3 = 1;
  obj3 = Symbol('a');
  // obj3 = null; // --> Type 'null' is not assignable to type 'Object'.ts(2322)
  // obj3 = undefined; // --> Type 'undefined' is not assignable to type 'Object'.ts(2322)

  return result;
}

// 3.2.9 type alias, union, intersection
export function typeAliasUnitonIntersectionExample(): number {
  let result = 0;

  /**
   * type Aliases
   */

  type Age = number;
  type Person = {
    name: string;
    age: Age;
  };

  let age: Age = 55;
  let driver: Person = {
    name: 'James May',
    age: age,
  };

  type Color = 'red';
  // type Color = 'blue'; // --> Duplicate identifier 'Color'.ts(2300)
  let x = Math.random() < 0.5;

  if (x) {
    type Color = 'blue'; // This shadows the Color declared above.
    let b: Color = 'blue';
  } else {
    let c: Color = 'red';
  }

  /**
   * Union and intersection types
   */
  type Cat = { name: string; purrs: boolean };
  type Dog = { name: string; barks: boolean; wags: boolean };
  type CatorDogOrBoth = Cat | Dog; // Union
  type CatAndDog = Cat & Dog; // Intersection

  // Cat
  // Union
  let a: CatorDogOrBoth = {
    name: 'Bonkers',
    purrs: true, // 고양이가 가르랑 거리다.
  };

  // Dog
  a = {
    name: 'Domino',
    barks: true, // 개가 짖다.
    wags: true, // 개가 꼬리를 흔들다.
  };

  // Both
  a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true,
  };

  // Intersection
  let b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true,
  };
  return result;

  function trueOrNull(isTrue: boolean): string | null {
    if (isTrue) {
      return 'true';
    }
    return null;
  }

  function stringOrNumber(a: string, b: number): string | number {
    return a || b;
  }
}

// 3.2.10 Arrays
export function arrayTypeExample(): number {
  let result = 0;

  let a = [1, 2, 3]; // a is number[]
  var b = ['a', 'b']; //  b is string[]
  let c: string[] = ['a']; // c is string[]
  let d = [1, 'a']; // d is (string | number)[]
  const e = [2, 'b']; // e is (string | number)[]

  //
  let f = ['red']; // f is string[]
  f.push('blue');
  // f.push(true); // --> Argument of type 'boolean' is not assignable to parameter of type 'string'.ts(2345)

  //
  let g = []; // g is any[]
  g.push(1); // g is any[] == number[]
  g.push('red'); // g is any[] == (string | number)[]

  //
  let h: number[] = []; // h is number[]
  h.push(1);
  // h.push('red'); // --> Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)

  let i = [1, 'a']; // i is (string | number)[]
  const ret = i.map((_) => {
    if (typeof _ === 'number') {
      return _ * 3;
    }
    return _.toUpperCase();
  });

  function buildArray() {
    let a = []; // a is any[]
    a.push(1); // a is number[]
    a.push('x'); // a is (string | number)[]
    return a; // 반환될 때 array 의 타입을 확정함
  }

  let myArray = buildArray(); // (string | number)[] 으로 확정됨
  // myArray.push(true); // --> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.ts(2345)

  return result;
}

// 3.2.11 Tuples
export function tupleTypeExample(): number {
  let result = 0;

  let a: [number] = [1]; // a is [number]

  // A tuple of [firs name, last name, birth year]
  let b: [string, string, number] = ['malcolm', 'gladwell', 1963]; // b is [string, string, number]
  // b = ['queen', 'elizabeth', 'ii', 1926]; // --> Type 'string' is not assignable to type 'number'.ts(2322)

  // An array of train fares, which sometimes vary depending on direction
  let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];

  // Read-only arrays and tupls
  let c: readonly number[] = [1, 2, 3]; // c is readonly number[]
  let d: readonly number[] = c.concat(4); // d is readonly number[]
  let e = d[2];

  type A = readonly string[]; // A is readonly string[]
  type B = ReadonlyArray<string>; // B is readonly string[]
  type C = Readonly<string[]>; // C is readonly string[]
  type D = readonly [number, string]; // D is readonly [number, string]
  type E = Readonly<[number, string]>; // E is readonly [number, string]

  return result;
}

// 3.2.12 null, undefined, void, never
export function nullEtcTypeExample(): number {
  let result = 0;

  // (a) A function that returns a number or null
  function a(x: number) {
    if (x < 10) {
      return x;
    }
    return null;
  }

  // (b) A function that return undefined
  function b() {
    return undefined;
  }

  // (c) A function that returns void
  function c() {
    let a = 2 + 2;
    let b = a * a;
  }

  // (d) A function that returns never
  function d() {
    throw TypeError('I always error');
  }

  // (e) A Another function that returns never
  function e() {
    while (true) {
      // doSomething();
    }
  }
  return result;
}

// 3.2.13 enum
export function enumTypeExample(): number {
  let result = 0;

  // enum Language {
  //   English,
  //   Spanish,
  //   Russian,
  // }
  // enum을 여러 개로 나누어 정의해도 typescript는 알아서 합쳐준다.
  // 단, enum을 분할한다면 데이터형을 똑같이 맞춰야 한다.

  enum Language {
    English = 0,
    Spanish = 1,
  }

  enum Language {
    Russian = 2,
  }

  let myFirstLanguage = Language.Russian; // Language
  let mySecondLanguage = Language['English']; // Language

  enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = '0xc10050', // hexadecimal literal
    White = 255, // decimal litermal
  }
  let a = Color.Red; // a is Color
  // let b = Color.Green; // --> Property 'Green' does not exist on type 'typeof Color'.ts(2339)
  let c = Color[255]; // string
  let d = Color[6]; // string (!!!) 주의

  // DON'T
  const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table,
  }

  function flip(f: Flippable) {
    return 'flipped it';
  }

  flip(Flippable.Chair); // 'flipped it'
  flip(Flippable.Cup); // 'flipped it'
  flip(12); // 'flipped it' (!!!) 주의

  // DO
  const enum Flippable2 {
    Burger = 'Bugger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table',
  }

  function flip2(f: Flippable2) {
    return 'flipped it';
  }

  flip2(Flippable2.Chair); // 'flipped it'
  flip2(Flippable2.Cup); // 'flipped it'
  // flip2(12); // --> Argument of type '12' is not assignable to parameter of type 'Flippable2'.ts(2345)

  return result;
}
