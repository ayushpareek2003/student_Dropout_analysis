// import { ScatterChart } from 'recharts';
import AreaChart from './components/AreaChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PirChart from './components/PirChart';

import ComposedChartComponent  from './components/compo';
import BarChartComponent2 from './components/BAR_CHART2';
import GroupedBarChart from './components/GroupedBar';
import GroupedBarChart2 from './components/GroupedBarChart2.jsx';
import BarChart3 from './components/Bar_Chart3.jsx';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
            <div className="w-full text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800">Student Dropout Analysis</h1>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        
        <GridItem title="Dropout rate by Father's occupation">
          <BarChart3 />
        </GridItem>

        <GridItem title="Distribution of data">
          <BarChart />
        </GridItem>


        <GridItem title="Academic status by age">
          <GroupedBarChart />
        </GridItem>
        <GridItem title="Dropout rates by courses">
          <GroupedBarChart2/>
        </GridItem>

        <GridItem title="Dropout rates by marital status">
          <BarChartComponent2/>
        </GridItem>

      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-200 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}
