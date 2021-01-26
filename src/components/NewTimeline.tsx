import React from 'react';
import cntl from 'cntl';

interface NewTimelineProps {
  value: string;
}

const NewTimeline: React.FC<NewTimelineProps> = ({ value }) => {
  return (
    <div className={ cntl`flex flex-col items-center w-full` }>
      持ち越し適用後TL
      <textarea className={ cntl`border md:w-full lg:w-1\/2 h-64` } defaultValue={ value }></textarea>
    </div>
  );
};

export default NewTimeline;
