import { should } from 'chai';
should();

import * as ch2 from './ch2';

describe('ch2', () => {
  describe('ex1', () => {
    it('should return a message', () => {
      ch2.ex1().should.have.string('Hello, TypeScript!');
    });
  });

  describe('ex2', () => {
    it('should return 12', () => {
      ch2.ex2().should.equal(12);
    });
  });

  describe('add', () => {
    it('should return 6', () => {
      ch2.add(2, 4).should.equal(6);
    });
  });

  describe('pureAssoc', () => {
    const person = {
      name: 'Bob',
    };

    it('should addded a key and value', () => {
      const result: ch2.Assoc = ch2.pureAssoc('shoeSize', 400, person);
      result.should.eql({ name: 'Bob', shoeSize: 400 });
    });
  });
});
