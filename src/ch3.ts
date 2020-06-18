/**
 * Chapter 3. All About Types
 */

export function squareOf(n: number): number {
  return n * n;
}

export function anyTypeExample(): number {
  let result = 0;

  let a: any = 666; // any
  let b: any = ['danger']; // any
  let c = a + b; // any

  return result;
}

export function unknownTypeExample(): number {
  let result = 0;

  let a: unknown = 30; // unknown
  let b = a === 123; // boolean
  // let c = a + 10;   // Error TS2571: Object is of type 'unknown'
  if (typeof a === 'number') {
    let d = a + 10; // number
  }

  return result;
}

export function booleanTypeExample(): number {
  let result = 0;

  let a = true; // boolean
  var b = false; // boolean
  const c = true; // true
  let d: boolean = true; // boolean
  let e: true = true; // true
  let f: false = false; // false
  // let f: true = false; // Error TS2322: Type 'false' is not assignable to type 'true'

  return result;
}

export function numberTypeExample(): number {
  let result = 0;

  let a = 1234; // number
  var b = Infinity * 0.1; // number
  const c = 5678; // 5678
  let d = a < b; // boolean
  let e: number = 100; // number
  let f: 26.218 = 26.218; // 26.218
  // let g: 26.218 = 10; // Error TS2322: Type '10' is not assignable to type '26.218'

  return result;
}

export function bigintTypeExample(): number {
  let result = 0;

  return result;
}
