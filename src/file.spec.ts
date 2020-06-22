import { should } from 'chai';
should();

import * as file from './file';

describe('file', () => {
  describe('fileRead()', () => {
    const data = [
      {
        Message: 'Hello, World!',
        category: 'TypeSciprt',
        group: 'Programming',
      },
      { Message: 'Lean Start up', category: 'Agile', group: 'Methodology' },
    ];

    it('should return "Hello, World!"', () => {
      file.fileRead().should.eql(data);
    });
  });
});
