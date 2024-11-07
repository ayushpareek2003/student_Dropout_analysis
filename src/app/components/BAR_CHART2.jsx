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
    name: 'Single',
    SR: 1184,
  },
  {
    name: 'Married',
    MR: 179,
  },
  {
    name: 'Widower',
    WR: 1,
  },
  {
    name: 'Divorced',
    DR: 42,
  },
  {
    name: 'Common-law- marriage',
    CR: 11,
  },
  {
    name: 'Legally separted',
    LR: 4,
  }
];

const BarChartComponent2 = () => {
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
        <Bar dataKey="SR" fill="#6EE7B7" barSize={80} />   {/* Light Green */}
        <Bar dataKey="MR" fill="#A5F3FC" barSize={80} />   {/* Light Blue */}
        <Bar dataKey="WR" fill="#FDBA74" barSize={80} />   {/* Light Orange */}
        <Bar dataKey="DR" fill="#FCA5A8" barSize={80} />   {/* Soft Pink */}
        <Bar dataKey="CR" fill="#FBBF24" barSize={80} />   {/* Yellow */}
        <Bar dataKey="LR" fill="#C084FC" barSize={80} />   {/* Lavender */}
        
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

export default BarChartComponent2;
