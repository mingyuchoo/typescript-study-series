import { should } from 'chai';
should();

import * as ch4 from '../ch4';

describe('ch4', () => {
  describe('xxxExample()', () => {
    it('call', () => {
      ch4.add(1, 2).should.equal(3);
    });
  });
});
