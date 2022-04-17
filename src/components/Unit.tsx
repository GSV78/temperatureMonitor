import React, { FC } from 'react';
import cn from 'classnames';
import '../App.css';

const Unit: FC<{ key: string; temp: number; ind: number }> = ({ temp, ind }) => {
  return (
    <div
      className={cn('item', {
        cold: temp < 15,
        hot: temp > 40,
      })}>
      датчик №{ind + 1}: {temp} градусов
    </div>
  );
};

export default Unit;
