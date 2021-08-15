//import { add } from '@/ch4';

export function add(a: number, b: number): number {
  return a + b;
}

describe('ch4', () => {
  it('add', () => {
    expect(add(1, 2)).toBe(3);
  });
});
