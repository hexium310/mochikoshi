import { generateTimeline } from '../../src/utils/generateTimeline';

describe('generateTimeline', () => {
  test('should return new timeline', () => {
    expect(generateTimeline(`1:30 abcde
1;30 fghij
130 klmno
01:30 abcde
01;30 fghij
0130 klmno
1:30 aaa (1:10)
1:30 bbb (0:10)
pqrsu`, 60)).toBe(`1:00 abcde
1:00 fghij
1:00 klmno
1:00 abcde
1:00 fghij
1:00 klmno
1:00 aaa (0:40)
1:00 bbb (-:--)
pqrsu`);
  });

  test('should return empty string when time of timeline is less than 0 sec', () => {
    expect(generateTimeline(`1:00 abcde
01:00 abcde
fghij`, 30)).toBe('');
  });

  test('should return original timeline', () => {
    expect(generateTimeline(`1:30 abcde
1;30 fghij
130 klmno
01:30 abcde
01;30 fghij
0130 klmno
1:30 aaa (1:10)
1:30 bbb (0:10)
pqrsu`, null)).toBe(`1:30 abcde
1;30 fghij
130 klmno
01:30 abcde
01;30 fghij
0130 klmno
1:30 aaa (1:10)
1:30 bbb (0:10)
pqrsu`);
  });
});
