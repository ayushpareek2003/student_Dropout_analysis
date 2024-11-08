'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const dropoutData = [
  {
    name: 'Dropout',
    Dropout: 1000,
  },
  {
    name: 'Enrolled Target',
    EnrolledTarget: 700,
  },
  {
    name: 'Graduate',
    Graduate: 2200,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}> {/* Set a larger height for visibility */}
      <BarChart
        data={dropoutData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Dropout" fill="#6EE7B7" barSize={80} /> {/* Thicker bar */}
        <Bar dataKey="EnrolledTarget" fill="#A5F3FC" barSize={80} />
        <Bar dataKey="Graduate" fill="#FCA5A5" barSize={80} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-gray-900 flex flex-col gap-2 rounded-md shadow-lg">
        <p className="text-yellow-300 font-semibold text-lg">{label}</p>
        {payload.map((entry, index) => (
          <p key={`tooltip-${index}`} className="text-sm text-green-400">
            {entry.name}:
            <span className="ml-2 font-bold text-white">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default BarChartComponent;
