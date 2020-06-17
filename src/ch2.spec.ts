import { should } from 'chai';
should();

import * as ch2 from './ch2';

describe('ch2', () => {
  describe('add', () => {
    it('add 2 and 4', () => {
      ch2.add(2, 4).should.be.equal(6);
    });
  });

  describe('pureAssoc', () => {
    const person = {
      name: 'Bob',
    };
    it('add key, value', () => {
      const result: ch2.Assoc = ch2.pureAssoc('shoeSize', 400, person);
      result.should.be.eql({ name: 'Bob', shoeSize: 400 });
    });
  });
});
