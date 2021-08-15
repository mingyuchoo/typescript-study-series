import * as file from '@/others/file';

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
      expect(file.fileRead()).toEqual(data);
    });
  });
});
