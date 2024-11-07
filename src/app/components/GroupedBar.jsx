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

const data=[
  {
    "Age": 17,
    "Dropout": 0,
    "Enrolled": 2,
    "Graduate": 3
  },
  {
    "Age": 18,
    "Dropout": 202,
    "Enrolled": 172,
    "Graduate": 662
  },
  {
    "Age": 19,
    "Dropout": 207,
    "Enrolled": 157,
    "Graduate": 547
  },
  {
    "Age": 20,
    "Dropout": 133,
    "Enrolled": 140,
    "Graduate": 326
  },
  {
    "Age": 21,
    "Dropout": 93,
    "Enrolled": 70,
    "Graduate": 159
  },
  {
    "Age": 22,
    "Dropout": 58,
    "Enrolled": 37,
    "Graduate": 79
  },
  {
    "Age": 23,
    "Dropout": 41,
    "Enrolled": 24,
    "Graduate": 43
  },
  {
    "Age": 24,
    "Dropout": 56,
    "Enrolled": 30,
    "Graduate": 45
  },
  {
    "Age": 25,
    "Dropout": 47,
    "Enrolled": 21,
    "Graduate": 25
  },
  {
    "Age": 26,
    "Dropout": 52,
    "Enrolled": 19,
    "Graduate": 23
  },
  {
    "Age": 27,
    "Dropout": 55,
    "Enrolled": 12,
    "Graduate": 24
  },
  {
    "Age": 28,
    "Dropout": 47,
    "Enrolled": 15,
    "Graduate": 21
  },
  {
    "Age": 29,
    "Dropout": 45,
    "Enrolled": 5,
    "Graduate": 16
  },
  {
    "Age": 30,
    "Dropout": 30,
    "Enrolled": 6,
    "Graduate": 13
  },
  {
    "Age": 31,
    "Dropout": 36,
    "Enrolled": 7,
    "Graduate": 12
  },
  {
    "Age": 32,
    "Dropout": 33,
    "Enrolled": 5,
    "Graduate": 23
  },
  {
    "Age": 33,
    "Dropout": 20,
    "Enrolled": 8,
    "Graduate": 17
  },
  {
    "Age": 34,
    "Dropout": 29,
    "Enrolled": 12,
    "Graduate": 19
  },
  {
    "Age": 35,
    "Dropout": 29,
    "Enrolled": 5,
    "Graduate": 15
  },
  {
    "Age": 36,
    "Dropout": 21,
    "Enrolled": 3,
    "Graduate": 11
  },
  {
    "Age": 37,
    "Dropout": 23,
    "Enrolled": 5,
    "Graduate": 14
  },
  {
    "Age": 38,
    "Dropout": 19,
    "Enrolled": 4,
    "Graduate": 6
  },
  {
    "Age": 39,
    "Dropout": 18,
    "Enrolled": 5,
    "Graduate": 15
  },
  {
    "Age": 40,
    "Dropout": 13,
    "Enrolled": 4,
    "Graduate": 6
  },
  {
    "Age": 41,
    "Dropout": 11,
    "Enrolled": 5,
    "Graduate": 15
  },
  {
    "Age": 42,
    "Dropout": 7,
    "Enrolled": 2,
    "Graduate": 4
  },
  {
    "Age": 43,
    "Dropout": 11,
    "Enrolled": 3,
    "Graduate": 11
  },
  {
    "Age": 44,
    "Dropout": 10,
    "Enrolled": 2,
    "Graduate": 9
  },
  {
    "Age": 45,
    "Dropout": 13,
    "Enrolled": 4,
    "Graduate": 5
  },
  {
    "Age": 46,
    "Dropout": 6,
    "Enrolled": 0,
    "Graduate": 6
  },
  {
    "Age": 47,
    "Dropout": 11,
    "Enrolled": 2,
    "Graduate": 5
  },
  {
    "Age": 48,
    "Dropout": 7,
    "Enrolled": 3,
    "Graduate": 1
  },
  {
    "Age": 49,
    "Dropout": 7,
    "Enrolled": 1,
    "Graduate": 5
  },
  {
    "Age": 50,
    "Dropout": 9,
    "Enrolled": 2,
    "Graduate": 5
  },
  {
    "Age": 51,
    "Dropout": 5,
    "Enrolled": 0,
    "Graduate": 2
  },
  {
    "Age": 52,
    "Dropout": 0,
    "Enrolled": 0,
    "Graduate": 4
  },
  {
    "Age": 53,
    "Dropout": 3,
    "Enrolled": 1,
    "Graduate": 3
  },
  {
    "Age": 54,
    "Dropout": 4,
    "Enrolled": 1,
    "Graduate": 2
  },
  {
    "Age": 55,
    "Dropout": 3,
    "Enrolled": 0,
    "Graduate": 2
  },
  {
    "Age": 57,
    "Dropout": 1,
    "Enrolled": 0,
    "Graduate": 1
  },
  {
    "Age": 58,
    "Dropout": 2,
    "Enrolled": 0,
    "Graduate": 1
  },
  {
    "Age": 59,
    "Dropout": 2,
    "Enrolled": 0,
    "Graduate": 1
  },
  {
    "Age": 60,
    "Dropout": 0,
    "Enrolled": 0,
    "Graduate": 2
  },
  {
    "Age": 61,
    "Dropout": 1,
    "Enrolled": 0,
    "Graduate": 0
  },
  {
    "Age": 62,
    "Dropout": 0,
    "Enrolled": 0,
    "Graduate": 1
  },
  {
    "Age": 70,
    "Dropout": 1,
    "Enrolled": 0,
    "Graduate": 0
  }
]


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-gray-900 flex flex-col gap-2 rounded-md shadow-lg">
        <p className="text-yellow-300 font-semibold text-lg">AGE:{label}</p>
        {payload.map((entry, index) => (
          <p key={`tooltip-${index}`} className="text-sm text-white">
            {entry.name}: <span className="ml-2 font-bold text-white">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const GroupedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
       
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Dropout" fill="#FF7F7F" barSize={10} />    {/* Red color for Dropout */}
        <Bar dataKey="Graduate" fill="#7FB3FF" barSize={10} />   {/* Blue color for Graduate */}
        <Bar dataKey="Enrolled" fill="#7FFF7F" barSize={10} />   {/* Green color for Enrolled */}
      </BarChart>
    </ResponsiveContainer>
  );
};


export default GroupedBarChart;
