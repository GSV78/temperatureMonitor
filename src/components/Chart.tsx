import '../App.css';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush, Legend } from 'recharts';
import { getDay, InitialDayStateType, ItemType } from '../redux/dayReducer';
import { AppStateType } from '../redux/store';

const Chart = () => {
  let [date, setDate] = useState('2022-04-16');
  let day: InitialDayStateType = useSelector((state: AppStateType) => {
    return state.day;
  });
  let dispatch = useDispatch();
  let onChangeDate = (e: any) => {
    console.log(e.currentTarget.value);
    return setDate(e.currentTarget.value + '');
  };
  let onSubmitDate = () => {
    let arr = date.split('-');
    console.log(`${arr[2]}.${arr[1]}.${arr[0]}`);
    dispatch(getDay(`${arr[2]}.${arr[1]}.${arr[0]}`));
  };
  const [opacity, setOpacity] = useState({
    t1: 1,
    t2: 1,
    t3: 1,
    t4: 1,
    t5: 1,
    t6: 1,
    t7: 1,
    t8: 1,
    t9: 1,
    t10: 1,
    t11: 1,
    t12: 1,
  });

  const handleMouseEnter = useCallback(
    (o) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity],
  );

  const handleMouseLeave = useCallback(
    (o) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity],
  );

  return (
    <div>
      <div className="inputForm">
        <span>Введите дату: </span>
        <input type="date" onChange={onChangeDate} value={date} />
        <button onClick={onSubmitDate}>OK</button>
      </div>
      <LineChart
        width={950}
        height={700}
        data={[...day]}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="t1"
          strokeOpacity={opacity.t1}
          stroke="rgb(173, 48, 48)"
          // fill="rgb(173, 48, 48)"
        />
        <Line
          type="monotone"
          dataKey="t2"
          strokeOpacity={opacity.t2}
          stroke="rgb(173, 94, 48)"
          // fill="rgb(173, 94, 48)"
        />
        <Line
          type="monotone"
          dataKey="t3"
          strokeOpacity={opacity.t3}
          stroke="rgb(173, 144, 48)"
          // fill="rgb(173, 144, 48)"
        />
        <Line
          type="monotone"
          dataKey="t4"
          strokeOpacity={opacity.t4}
          stroke="rgb(144, 173, 48)"
          // fill="rgb(144, 173, 48)"
        />
        <Line
          type="monotone"
          dataKey="t5"
          strokeOpacity={opacity.t5}
          stroke="rgb(87, 173, 48)"
          // fill="rgb(87, 173, 48)"
        />
        <Line
          type="monotone"
          dataKey="t6"
          strokeOpacity={opacity.t6}
          stroke="rgb(48, 173, 125)"
          // fill="rgb(48, 173, 125)"
        />
        <Line
          type="monotone"
          dataKey="t7"
          strokeOpacity={opacity.t7}
          stroke="rgb(48, 127, 173)"
          // fill="rgb(48, 127, 173)"
        />
        <Line
          type="monotone"
          dataKey="t8"
          strokeOpacity={opacity.t8}
          stroke="rgb(48, 71, 173)"
          // fill="rgb(48, 71, 173)"
        />
        <Line
          type="monotone"
          dataKey="t9"
          strokeOpacity={opacity.t9}
          stroke="rgb(92, 48, 173)"
          // fill="rgb(92, 48, 173)"
        />
        <Line
          type="monotone"
          dataKey="t10"
          strokeOpacity={opacity.t10}
          stroke="rgb(154, 48, 173)"
          // fill="rgb(154, 48, 173)"
        />
        <Line
          type="monotone"
          dataKey="t11"
          strokeOpacity={opacity.t11}
          stroke="rgb(173, 48, 125)"
          // fill="rgb(173, 48, 125)"
        />
        <Line
          type="monotone"
          dataKey="t12"
          strokeOpacity={opacity.t12}
          stroke="rgb(173, 48, 48)"
          // fill="rgb(173, 48, 48)"
        />
        {/* <Brush /> */}
        {/* <Legend /> */}
        <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      </LineChart>
      <p>Данные по каждому датчику отдельно</p>
      <p>t1</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t1" stroke="rgb(173, 48, 48)" fill="rgb(173, 48, 48)" />
      </LineChart>
      <p>t2</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t2" stroke="rgb(173, 94, 48)" fill="rgb(173, 94, 48)" />
        {/* <Brush /> */}
      </LineChart>
      <p>t3</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t3" stroke="rgb(173, 144, 48)" fill="rgb(173, 144, 48)" />
      </LineChart>
      <p>t4</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t4" stroke="rgb(144, 173, 48)" fill="rgb(144, 173, 48)" />
      </LineChart>
      <p>t5</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t5" stroke="rgb(87, 173, 48)" fill="rgb(87, 173, 48)" />
      </LineChart>
      <p>t6</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t6" stroke="rgb(48, 173, 125)" fill="rgb(48, 173, 125)" />
      </LineChart>
      <p>t7</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t7" stroke="rgb(48, 127, 173)" fill="rgb(48, 127, 173)" />
      </LineChart>
      <p>t8</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t8" stroke="rgb(48, 71, 173)" fill="rgb(48, 71, 173)" />
      </LineChart>
      <p>t9</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t9" stroke="rgb(92, 48, 173)" fill="rgb(92, 48, 173)" />
      </LineChart>
      <p>t10</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t10" stroke="rgb(154, 48, 173)" fill="rgb(154, 48, 173)" />
      </LineChart>
      <p>t11</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t11" stroke="rgb(173, 48, 125)" fill="rgb(173, 48, 125)" />
      </LineChart>
      <p>t12</p>
      <LineChart
        width={950}
        height={200}
        data={[...day]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="t12" stroke="rgb(173, 48, 48)" fill="rgb(173, 48, 48)" />
      </LineChart>
    </div>
  );
};

export default Chart;
