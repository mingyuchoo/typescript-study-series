/**
 * Chapter2. TypeScript: a 10_000 Foot View
 */

export function ex1(): string {
  return 'Hello, TypeScript!';
}

export function ex2(): number {
  let a: number = 1 + 2;
  let b: number = a + 3;
  let c = {
    apple: a,
    banana: b,
  };
  let d: number = c.apple * 4;
  return d;
}

export let add = (x: number, y: number): number => x + y;

export interface Assoc {
  [key: string]: number | string;
}
export let pureAssoc = (key: string, value: number, obj: Assoc): Assoc => ({
  ...obj,
  [key]: value,
});
