import { expect, should } from 'chai';
should();

describe('ch2', () => {
  describe('ex1', () => {
    it('positive case', () => {
      expect(true).to.be.true;
      true.should.be.true;
    });
  });
});
