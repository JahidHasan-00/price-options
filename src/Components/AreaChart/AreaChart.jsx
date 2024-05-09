import React from 'react';
import { AreaChart as ArChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const studentData = [
  { id: 1, name: "Emma Johnson", math: 85, physics: 78, chemistry: 90 },
  { id: 2, name: "Michael Smith", math: 78, physics: 82, chemistry: 85 },
  { id: 3, name: "Sophia Williams", math: 92, physics: 88, chemistry: 95 },
  { id: 4, name: "Noah Brown", math: -70, physics: 65, chemistry: 75 },
  { id: 5, name: "Olivia Jones", math: 88, physics: 85, chemistry: 92 },
  { id: 6, name: "James Miller", math: -65, physics: 70, chemistry: 68 },
  { id: 7, name: "Ava Davis", math: 95, physics: 90, chemistry: 97 },
  { id: 8, name: "William Wilson", math: -81, physics: 78, chemistry: 83 },
  { id: 9, name: "Isabella Taylor", math: 75, physics: 72, chemistry: 80 },
  { id: 10, name: "John Anderson", math: 90, physics: 85, chemistry: 88 }
]; 

const gradientOffset = () => {
  const dataMax = Math.max(...studentData.map((i) => i.math));
  const dataMin = Math.min(...studentData.map((i) => i.math));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const AreaChart = () => {
  return (
    <div className='w-full h-[300px]'>
        <ResponsiveContainer width="100%" height="100%">
          <ArChart
          width={800}
          height={500}
          data={studentData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="math"
            stroke="#000"
            fill="url(#splitColor)"
          />
          </ArChart>
        </ResponsiveContainer>
    </div>
      
  );
};

export default AreaChart;