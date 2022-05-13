import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { AppStateType } from '../redux/store';

export default function App() {
  let now = new Date();
  let arr = useSelector((state: AppStateType) => state.lib.arr);
  type DataType = {
    name: string;
    t1: number;
    t2: number;
    t3: number;
    t4: number;
    t5: number;
    t6: number;
    t7: number;
    t8: number;
    t9: number;
    t10: number;
    t11: number;
    t12: number;
  };
  let data: Array<DataType> = [
    {
      name: `${now.getHours()}:${
        now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
      }:${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`,
      t1: arr[0],
      t2: arr[1],
      t3: arr[2],
      t4: arr[3],
      t5: arr[4],
      t6: arr[5],
      t7: arr[6],
      t8: arr[7],
      t9: arr[8],
      t10: arr[9],
      t11: arr[10],
      t12: arr[11],
    },
  ];
  return (
    <BarChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 25,
        right: 30,
        left: 1,
        bottom: 15,
      }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="t1"
        fill={data[0].t1 < 15 ? '#3f3fe2' : data[0].t1 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t2"
        fill={data[0].t2 < 15 ? '#3f3fe2' : data[0].t2 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t3"
        fill={data[0].t3 < 15 ? '#3f3fe2' : data[0].t3 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t4"
        fill={data[0].t4 < 15 ? '#3f3fe2' : data[0].t4 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t5"
        fill={data[0].t5 < 15 ? '#3f3fe2' : data[0].t5 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t6"
        fill={data[0].t6 < 15 ? '#3f3fe2' : data[0].t6 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t7"
        fill={data[0].t7 < 15 ? '#3f3fe2' : data[0].t7 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t8"
        fill={data[0].t8 < 15 ? '#3f3fe2' : data[0].t8 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t9"
        fill={data[0].t9 < 15 ? '#3f3fe2' : data[0].t9 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t10"
        fill={data[0].t10 < 15 ? '#3f3fe2' : data[0].t10 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t11"
        fill={data[0].t11 < 15 ? '#3f3fe2' : data[0].t11 > 40 ? '#e2523f' : '#3fe247'}
      />
      <Bar
        dataKey="t12"
        fill={data[0].t12 < 15 ? '#3f3fe2' : data[0].t12 > 40 ? '#e2523f' : '#3fe247'}
      />
    </BarChart>
  );
}
