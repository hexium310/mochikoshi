import { generateTimeline } from '../../src/utils/generateTimeline';

describe('generateTimeline', () => {
  describe('that is given value separated by `:`', () => {
    test('should return new timeline', () => {
      expect(generateTimeline('1:30 abcde\n0:31 fghij', 60)).toBe('1:00 abcde\n0:01 fghij');
    });

    test('should return empty string when time of timeline is less than 0 sec', () => {
      expect(generateTimeline('1:00 abcde\nfghij', 30)).toBe('');
    });

    test('should return original timeline', () => {
      expect(generateTimeline('1:30 abcde\n0:31 fghij', null)).toBe('1:30 abcde\n0:31 fghij');
    });
  });

  describe('that is given value separated by `;`', () => {
    test('should return new timeline', () => {
      expect(generateTimeline('1;30 abcde\n0;31 fghij', 60)).toBe('1:00 abcde\n0:01 fghij');
    });

    test('should return empty string when time of timeline is less than 0 sec', () => {
      expect(generateTimeline('1;00 abcde\nfghij', 30)).toBe('');
    });

    test('should return original timeline', () => {
      expect(generateTimeline('1;30 abcde\n0;31 fghij', null)).toBe('1;30 abcde\n0;31 fghij');
    });
  });

  describe('that is given non-separated value', () => {
    test('should return new timeline', () => {
      expect(generateTimeline('130 abcde\n031 fghij', 60)).toBe('1:00 abcde\n0:01 fghij');
    });

    test('should return empty string when time of timeline is less than 0 sec', () => {
      expect(generateTimeline('100 abcde\nfghij', 30)).toBe('');
    });

    test('should return original timeline', () => {
      expect(generateTimeline('130 abcde\n031 fghij', null)).toBe('130 abcde\n031 fghij');
    });
  });

  test('shold return unchanged timeline', () => {
    expect(generateTimeline('abcde\n\nfghij', 30)).toBe('abcde\n\nfghij');
  });
});
