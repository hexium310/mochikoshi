import React from 'react';
import cntl from 'cntl';

import { generateTimeline } from '../utils/generateTimeline';
import OriginalTimeline from 'components/OriginalTimeline';
import NewTimeline from 'components/NewTimeline';
import CarriedOverTime from 'components/CarriedOverTime';

export const App: React.FC = () => {
  const [carriedOverTime, setCarriedOverTime] = React.useState<number | null>(null);
  const [timeline, setTimeline] = React.useState('');
  const [newTimeline, setNewTimeline] = React.useState('');

  React.useEffect(() => {
    const newTL = generateTimeline(timeline, carriedOverTime);
    setNewTimeline(newTL);
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
