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
    { "Father's occupation": 1, Dropout: 82, Enrolled: 3, Graduate: 43 },
    { "Father's occupation": 2, Dropout: 48, Enrolled: 23, Graduate: 63 },
    { "Father's occupation": 3, Dropout: 70, Enrolled: 50, Graduate: 77 },
    { "Father's occupation": 4, Dropout: 114, Enrolled: 63, Graduate: 207 },
    { "Father's occupation": 5, Dropout: 139, Enrolled: 74, Graduate: 173 },
    { "Father's occupation": 6, Dropout: 148, Enrolled: 107, Graduate: 261 },
    { "Father's occupation": 7, Dropout: 69, Enrolled: 48, Graduate: 125 },
    { "Father's occupation": 8, Dropout: 184, Enrolled: 111, Graduate: 371 },
    { "Father's occupation": 9, Dropout: 94, Enrolled: 55, Graduate: 169 },
    { "Father's occupation": 10, Dropout: 323, Enrolled: 163, Graduate: 524 },
    { "Father's occupation": 11, Dropout: 85, Enrolled: 54, Graduate: 127 },
    { "Father's occupation": 12, Dropout: 46, Enrolled: 0, Graduate: 19 },
    { "Father's occupation": 13, Dropout: 13, Enrolled: 2, Graduate: 4 },
    { "Father's occupation": 14, Dropout: 0, Enrolled: 0, Graduate: 1 }
  ];
  
  

const BarChartComponent3 = () => {
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
        <XAxis dataKey="Father's occupation" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="Dropout" fill="#6EE7B7" barSize={80} /> {/* Thicker bar */}
        <Bar dataKey="EnrolledTarget" fill="#A5F3FC" barSize={80} />
        <Bar dataKey="Graduate" fill="#FCA5A5" barSize={80} />
        
      </BarChart>
    </ResponsiveContainer>
  );
};
const fatherOccupationLabels = {
    1: "Student",
    2: "Representatives of the Legislative Power, Executive Bodies, Directors, Directors and Executive Managers",
    3: "Specialists in Intellectual and Scientific Activities",
    4: "Intermediate Level Technicians and Professions",
    5: "Administrative staff",
    6: "Personal Services, Security and Safety Workers, and Sellers",
    7: "Farmers and Skilled Workers in Agriculture, Fisheries, and Forestry",
    8: "Skilled Workers in Industry, Construction, and Craftsmen",
    9: "Installation and Machine Operators and Assembly Workers",
    10: "Unskilled Workers",
    11: "Armed Forces Professions",
    12: "Other Situation; 13-(blank)",
    13: "Armed Forces Officers",
    14: "Armed Forces Sergeants"
  };
  
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // Ensure that the label corresponds to a valid occupation key
      const occupationLabel =fatherOccupationLabels[parseInt(label)];
      console.log(fatherOccupationLabels[label])
      console.log(occupationLabel)
  
      return (
        <div className="p-4 bg-gray-900 flex flex-col gap-2 rounded-md shadow-lg">
          <p className="text-yellow-300 font-semibold text-lg">
            {fatherOccupationLabels[label] ?fatherOccupationLabels[label] : "No label found"}
          </p>
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
  

export default BarChartComponent3;
