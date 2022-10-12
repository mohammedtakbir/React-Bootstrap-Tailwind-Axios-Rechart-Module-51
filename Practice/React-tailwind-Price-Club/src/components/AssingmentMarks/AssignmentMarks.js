import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const AssignmentMarks = () => {
    const data = [
        {
            name: 'Page A',
            marks: 4000,
            pv: 2400,
            quiz: 2400,
        },
        {
            name: 'Page B',
            marks: 3000,
            pv: 1398,
            quiz: 2210,
        },
        {
            name: 'Page C',
            marks: 2000,
            pv: 9800,
            quiz: 2290,
        },
        {
            name: 'Page D',
            marks: 2780,
            pv: 3908,
            quiz: 2000,
        },
        {
            name: 'Page E',
            marks: 1890,
            pv: 4800,
            quiz: 2181,
        },
        {
            name: 'Page F',
            marks: 2390,
            pv: 3800,
            quiz: 2500,
        },
        {
            name: 'Page G',
            marks: 3490,
            pv: 4300,
            quiz: 2100,
        },
    ];

    return (
        <div className='mt-28 ml-10'>
            <LineChart width={600} height={400} data={data}>
                <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default AssignmentMarks;