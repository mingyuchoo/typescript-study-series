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
