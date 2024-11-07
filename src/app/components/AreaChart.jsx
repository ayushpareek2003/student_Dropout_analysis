'use client';

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const productSales = [
  {
    name: 'Jan',
    product1: 4000,
    product2: 2400,
  },
  {
    name: 'Feb',
    product1: 3000,
    product2: 2210,
  },
  {
    name: 'Mar',
    product1: 2000,
    product2: 2290,
  },
  {
    name: 'Apr',
    product1: 2780,
    product2: 2000,
  },
  {
    name: 'May',
    product1: 1890,
    product2: 2181,
  },
  {
    name: 'Jun',
    product1: 2390,
    product2: 2500,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={productSales}
        margin={{ right: 30 }}
      >
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="4 4" stroke="#d1d5db" />

        <Tooltip content={<CustomTooltip />} />
        <Legend />

        <Area
          type="monotone"
          dataKey="product1"
          stroke="#EF4444"       // Bright red stroke
          fill="#FCA5A5"         // Light red fill
          stackId="1"
        />

        <Area
          type="monotone"
          dataKey="product2"
          stroke="#10B981"       // Bright green stroke
          fill="#6EE7B7"         // Light green fill
          stackId="1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-gray-900 flex flex-col gap-2 rounded-md shadow-lg">
        <p className="text-yellow-300 font-semibold text-lg">{label}</p>  {/* Yellow label for a pop */}
        <p className="text-sm text-red-400">
          Product 1:
          <span className="ml-2 font-bold text-white">${payload[0].value}</span>
        </p>
        <p className="text-sm text-green-400">
          Product 2:
          <span className="ml-2 font-bold text-white">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default AreaChartComponent;
