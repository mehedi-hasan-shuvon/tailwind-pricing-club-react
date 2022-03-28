import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyChart = () => {
    const data1 = [
        {
            supplier: 'Page A',
            price: 4000,
            sales: 2400,
            amt: 2400,
        },
        {
            supplier: 'Page B',
            price: 3000,
            sales: 1398,
            amt: 2210,
        },
        {
            supplier: 'Page C',
            price: 2000,
            sales: 9800,
            amt: 2290,
        },
        {
            supplier: 'Page D',
            price: 2780,
            sales: 3908,
            amt: 2000,
        },
        {
            supplier: 'Page E',
            price: 1890,
            sales: 4800,
            amt: 2181,
        },
        {
            supplier: 'Page F',
            price: 2390,
            sales: 3800,
            amt: 2500,
        },
        {
            supplier: 'Page G',
            price: 3490,
            sales: 4300,
            amt: 2100,
        },
    ];
    return (
        <LineChart width={800} height={500} data={data1} className="mx-auto">

            <Line dataKey={'price'} stroke="#8884d8" type="monotone"></Line>
            <Line dataKey={'sales'}></Line>
            <XAxis dataKey={'supplier'} />
            <Tooltip></Tooltip>
            <YAxis />
        </LineChart>
    );
};

export default MyChart;