import * as ch2 from '@/ch2';

describe('ch2', () => {
  describe('ex1', () => {
    it('should return a message', () => {
      expect(ch2.ex1()).toBe('Hello, TypeScript!');
    });
  });

  describe('ex2', () => {
    it('should return 12', () => {
      expect(ch2.ex2()).toBe(12);
    });
  });

  describe('add', () => {
    it('should return 6', () => {
      expect(ch2.add(2, 4)).toBe(6);
    });
  });

  describe('pureAssoc', () => {
    const person = {
      name: 'Bob',
    };

    it('should addded a key and value', () => {
      const result: ch2.Assoc = ch2.pureAssoc('shoeSize', 400, person);
      expect(result).toEqual({ name: 'Bob', shoeSize: 400 })
    });
  });
});
