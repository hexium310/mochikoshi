const defaultTime = 90;
const timeFormat = /(\d{1,2})[:;]?(\d{2})/g;
const deleteLine = '*****DELETE LINE*****';

export const generateTimeline = (timeline: string, carriedOverTime: number | null): string => {
  if (carriedOverTime === null) {
    return timeline;
  }

  const diff = defaultTime - carriedOverTime;
  let finished: boolean;

  const newTimeline = timeline.split('\n').map((line) => {
    if (finished) {
      return deleteLine;
    }

    return line.replaceAll(timeFormat, (_, min, sec, offset) => {
      const seconds = 60 * Number(min) + Number(sec);
      const time = seconds - diff;

      if (time <= 0) {
        if (offset === 0 ) {
          finished = true;
          return deleteLine;
        }
        return '-:--';
      }

      return `${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, '0')}`;
    });
  });

  return newTimeline.filter((v) => !v.startsWith(deleteLine)).join('\n');
};
