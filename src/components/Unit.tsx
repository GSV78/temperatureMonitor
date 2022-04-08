import React, { FC } from 'react';

const Unit: FC<{ key: string; temp: number; ind: number }> = ({ temp, ind }) => {
  debugger;
  return (
    <div>
      датчик №{ind + 1}: {temp} градусов
    </div>
  );
};

export default Unit;
