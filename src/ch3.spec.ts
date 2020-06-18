import { should } from 'chai';
should();

import * as ch3 from './ch3';

describe('ch3', () => {
  describe('squareOf()', () => {
    it('should return 4', () => {
      ch3.squareOf(2).should.equal(4);
    });
  });

  describe('xxxExample()', () => {
    it('call', () => {
      ch3.anyTypeExample().should.equal(0);
      ch3.unknownTypeExample().should.equal(0);
      ch3.booleanTypeExample().should.equal(0);
      ch3.numberTypeExample().should.equal(0);
      ch3.bigintTypeExample().should.equal(0);
    });
  });
});
