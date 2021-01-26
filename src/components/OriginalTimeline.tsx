import React from 'react';
import cntl from 'cntl';

interface OriginalTimelineProps {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const OriginalTimeline: React.FC<OriginalTimelineProps> = ({ value, handleChange }) => {
  return (
    <div className={ cntl`flex flex-col items-center w-full` }>
      元のTL
      <textarea
        className={ cntl`border md:w-full lg:w-1\/2 h-32` }
        placeholder="ここにTLをコピペ"
        defaultValue={ value }
        onChange={ handleChange }
      ></textarea>
    </div>
  );
};

export default OriginalTimeline;
