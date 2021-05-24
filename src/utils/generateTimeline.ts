const defaultTime = 90;
const timeFormat = /^(\d)[:;]?(\d{2})/;
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

    const result = timeFormat.exec(line);

    if (result === null) {
      return line;
    }

    const [matched, min, sec] = result;
    const seconds = 60 * Number(min) + Number(sec);
    const time = seconds - diff;

    if (time <= 0) {
      finished = true;
      return deleteLine;
    }

    return line.replace(matched, `${Math.floor(time / 60)}:${('00' + time % 60).slice(-2)}`);
  });

  return newTimeline.filter((v) => v !== deleteLine).join('\n');
};
