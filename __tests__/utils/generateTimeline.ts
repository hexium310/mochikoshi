import { generateTimeline } from '../../src/utils/generateTimeline';

describe('generateTimeline', () => {
  test('should return new timeline', () => {
    expect(generateTimeline(`1:30 abcde\n1;30 fghij\n130 klmno\npqrsu`, 60)).toBe('1:00 abcde\n1:00 fghij\n1:00 klmno\npqrsu');
  });

  test('should return empty string when time of timeline is less than 0 sec', () => {
    expect(generateTimeline('1:00 abcde\nfghij', 30)).toBe('');
  });

  test('should return original timeline', () => {
    expect(generateTimeline('1:30 abcde\n1;30 fghij\n130 klmno\npqrsu', null)).toBe('1:30 abcde\n1;30 fghij\n130 klmno\npqrsu');
  });
});
