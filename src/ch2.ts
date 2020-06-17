export function ex1(): void {
  console.log('Hello, TypeScript!');
}

export function ex2(): number {
  const a = 1 + 2;
  const b = a + 3;
  const c = {
    apple: a,
    banana: b,
  };
  const d = c.apple * 4;
  return d;
}

export const add = (x: number, y: number): number => x + y;

export interface Assoc {
  [key: string]: number | string;
}
export const pureAssoc = (key: string, value: number, obj: Assoc): Assoc => ({
  ...obj,
  [key]: value,
});
