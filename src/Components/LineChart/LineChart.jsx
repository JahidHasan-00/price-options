import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: "Emma Johnson", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Michael Smith", math: 78, physics: 82, chemistry: 85 },
        { id: 3, name: "Sophia Williams", math: 92, physics: 88, chemistry: 95 },
        { id: 4, name: "Noah Brown", math: 70, physics: 65, chemistry: 75 },
        { id: 5, name: "Olivia Jones", math: 88, physics: 85, chemistry: 92 },
        { id: 6, name: "James Miller", math: 65, physics: 70, chemistry: 68 },
        { id: 7, name: "Ava Davis", math: 95, physics: 90, chemistry: 97 },
        { id: 8, name: "William Wilson", math: 81, physics: 78, chemistry: 83 },
        { id: 9, name: "Isabella Taylor", math: 75, physics: 72, chemistry: 80 },
        { id: 10, name: "John Anderson", math: 90, physics: 85, chemistry: 88 }
      ];      

    return (
        <div className='w-full h-[300px]'>
            <ResponsiveContainer width={'100%'} height={'100%'}>
                <LChart width={800} height={400} data={studentData}>
                    <XAxis dataKey='name'/>
                    <YAxis/>
                    <Line dataKey="math" stroke='rgb(234 179 8)' strokeWidth={3}></Line>
                    <Line dataKey="physics" stroke='rgb(132 204 22)' strokeWidth={3}></Line>
                    <Line dataKey='chemistry' stroke='rgb(219 39 119)' strokeWidth={3}></Line>
                </LChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;