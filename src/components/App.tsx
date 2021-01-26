import React from 'react';
import cntl from 'cntl';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import OriginalTimeline from 'components/OriginalTimeline';
import NewTimeline from 'components/NewTimeline';
import CarriedOverTime from 'components/CarriedOverTime';

dayjs.extend(customParseFormat);

export const App: React.FC = () => {
  const [carriedOverTime, setCarriedOverTime] = React.useState<number | null>(null);
  const [timeline, setTimeline] = React.useState('');
  const [newTimeline, setNewTimeline] = React.useState('');

  React.useEffect(() => {
    const diff = 90 - (carriedOverTime ?? 90);

    const newTL = timeline.split('\n').map((v) => {
      if (!v.match(/^\d:\d{2}/)) {
        return v;
      }

      const time = dayjs(v.slice(0, 4), 'm:ss');
      const newTime = time.add(-1 * diff, 'second');

      if (newTime.minute() >= 2) {
        return '';
      }

      return v.replace(/.{4}/, newTime.format('m:ss'));
    });
    setNewTimeline(newTL.join('\n'));
  }, [carriedOverTime, timeline]);

  const handleCarriedOverTimeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setCarriedOverTime(Number(event.target.value));
  };

  const handleTimelineChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setTimeline(event.target.value);
  };

  return (
    <main className={ cntl`flex flex-col h-screen justify-center items-center p-4 gap-4` }>
      <CarriedOverTime value={ carriedOverTime } handleChange={ handleCarriedOverTimeChange } />
      <OriginalTimeline value={ timeline } handleChange={ handleTimelineChange } />
      ↓
      <NewTimeline value={ newTimeline } />
    </main>
  );
};
