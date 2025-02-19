import React from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", positive: 60, negative: 40 },
  { name: "Feb", positive: 75, negative: 25 },
];

export default function SentimentChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="positive" stroke="#82ca9d" />
      <Line type="monotone" dataKey="negative" stroke="#ff6b6b" />
    </LineChart>
  );
}

// const App = () => {
//   return (
//     <div>server</div>
//   )
// }

// export default App