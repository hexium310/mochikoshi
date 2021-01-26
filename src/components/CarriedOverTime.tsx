import React from 'react';
import cntl from 'cntl';

interface CarriedOverTimeProps {
  value: number | null;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CarriedOverTime: React.FC<CarriedOverTimeProps> = ({ value, handleChange }) => {
  return (
    <div className={ cntl`flex flex-row justify-center items-center w-full` }>
      <span className={ cntl`pr-2` }>持ち越し時間（秒）</span>
      <input type="text" className={ cntl`border w-auto` } defaultValue={ value?.toString() } onChange={ handleChange } />
    </div>
  );
};

export default CarriedOverTime;
