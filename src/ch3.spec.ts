import * as ch3 from '@/ch3';

describe('ch3', () => {
  describe('squareOf()', () => {
    it('should return 4', () => {
      expect(ch3.squareOf(2)).toBe(4);
    });
  });

  describe('xxxExample()', () => {
    it('call', () => {
      expect(ch3.anyTypeExample()).toBe(0);
      expect(ch3.unknownTypeExample()).toBe(0);
      expect(ch3.booleanTypeExample()).toBe(0);
      expect(ch3.numberTypeExample()).toBe(0);
      expect(ch3.bigintTypeExample()).toBe(0);
      expect(ch3.stringTypeExample()).toBe(0);
      expect(ch3.symbolTypeExample()).toBe(0);
      expect(ch3.objectTypeExample()).toBe(0);
      expect(ch3.typeAliasUnitonIntersectionExample()).toBe(0);
      expect(ch3.arrayTypeExample()).toBe(0);
      expect(ch3.tupleTypeExample()).toBe(0);
      expect(ch3.nullEtcTypeExample()).toBe(0);
      expect(ch3.enumTypeExample()).toBe(0);
    });
  });
});
