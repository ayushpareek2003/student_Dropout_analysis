'use client';

import {
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const courseData = [
  {
    Course_Name: "Biofuel Production Technologies",
    Dropout: 8,
    Enrolled: 3,
    Graduate: 1
  },
  {
    Course_Name: "Animation and Multimedia Design",
    Dropout: 82,
    Enrolled: 37,
    Graduate: 96
  },
  {
    Course_Name: "Social Service (evening attendance)",
    Dropout: 71,
    Enrolled: 21,
    Graduate: 123
  },
  {
    Course_Name: "Agronomy",
    Dropout: 86,
    Enrolled: 37,
    Graduate: 87
  },
  {
    Course_Name: "Communication Design",
    Dropout: 51,
    Enrolled: 42,
    Graduate: 133
  },
  {
    Course_Name: "Veterinary Nursing",
    Dropout: 90,
    Enrolled: 75,
    Graduate: 172
  },
  {
    Course_Name: "Informatics Engineering",
    Dropout: 92,
    Enrolled: 64,
    Graduate: 14
  },
  {
    Course_Name: "Equiniculture",
    Dropout: 78,
    Enrolled: 21,
    Graduate: 42
  },
  {
    Course_Name: "Management",
    Dropout: 134,
    Enrolled: 108,
    Graduate: 138
  },
  {
    Course_Name: "Social Service",
    Dropout: 65,
    Enrolled: 42,
    Graduate: 248
  },
  {
    Course_Name: "Tourism",
    Dropout: 96,
    Enrolled: 41,
    Graduate: 115
  },
  {
    Course_Name: "Nursing",
    Dropout: 118,
    Enrolled: 100,
    Graduate: 548
  },
  {
    Course_Name: "Oral Hygiene",
    Dropout: 33,
    Enrolled: 17,
    Graduate: 36
  },
  {
    Course_Name: "Advertising and Marketing Management",
    Dropout: 95,
    Enrolled: 48,
    Graduate: 125
  },
  {
    Course_Name: "Journalism and Communication",
    Dropout: 101,
    Enrolled: 34,
    Graduate: 196
  },
  {
    Course_Name: "Basic Education",
    Dropout: 85,
    Enrolled: 50,
    Graduate: 57
  },
  {
    Course_Name: "Management (evening attendance)",
    Dropout: 136,
    Enrolled: 54,
    Graduate: 78
  }
];

const BarChartComponent2 = () => {
  return (
    <ResponsiveContainer width="100%" height={300}> {/* Adjust height for better visibility */}
      <BarChart
        data={courseData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        
        {/* Bars */}
        <Bar
          dataKey="Dropout"
          fill="#FCA5A8"  // Soft Pink
          barSize={60}
        />
        <Bar
          dataKey="Enrolled"
          fill="#6EE7B7"  // Light Green
          barSize={60}
        />
        <Bar
          dataKey="Graduate"
          fill="#FBBF24"  // Yellow
          barSize={60}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const course_Data = {
    1: 'Biofuel Production Technologies',
    2: 'Animation and Multimedia Design',
    3: 'Social Service (evening attendance)',
    4: 'Agronomy',
    5: 'Communication Design',
    6: 'Veterinary Nursing',
    7: 'Informatics Engineering',
    8: 'Equiniculture',
    9: 'Management',
    10: 'Social Service',
    11: 'Tourism',
    12: 'Nursing',
    13: 'Oral Hygiene',
    14: 'Advertising and Marketing Management',
    15: 'Journalism and Communication',
    16: 'Basic Education',
    17: 'Management (evening attendance)'
  };
  

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // The `label` should now be the course name
    return (
      <div className="p-4 bg-gray-900 flex flex-col gap-2 rounded-md shadow-lg">
        {/* Showing the full course name in the tooltip */}
        <p className="text-yellow-300 font-semibold text-lg">{course_Data[label]}</p>
        {payload.map((entry, index) => (
          <p key={`tooltip-${index}`} className="text-sm text-green-400">
            {entry.dataKey}: {/* This will show "Dropout", "Enrolled", or "Graduate" */}
            <span className="ml-2 font-bold text-white">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default BarChartComponent2;
