import { should } from 'chai';
should();

import * as file from './file';

describe('file', () => {
  describe('fileRead()', () => {
    it('should return "Hello, World!"', () => {
      file.fileRead().should.equal('Hello, World!');
    });
  });
});
