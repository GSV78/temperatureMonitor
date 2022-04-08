import './styles.css';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush } from 'recharts';

const data = [
  { name: 'Page A', t1: 21, t2: 20 },
  { name: 'Page B', t1: 30, t2: 15 },
  { name: 'Page C', t1: 10, t2: 30 },
  { name: 'Page A', t1: 21, t2: 20 },
  { name: 'Page B', t1: 30, t2: 15 },
  { name: 'Page C', t1: 10, t2: 30 },
];

export default function App() {
  return (
    <div>
      <LineChart
        width={500}
        height={200}
        data={data}
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
        <Line type="monotone" dataKey="t1" stroke="#8884d8" fill="#8884d8" />
        <Line type="monotone" dataKey="t2" stroke="red" fill="red" />
        <Brush />
      </LineChart>
    </div>
  );
}
