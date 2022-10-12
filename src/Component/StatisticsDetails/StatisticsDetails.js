import React from 'react';
import './StatisticsDetails.css';
import {
    ResponsiveContainer,
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const StatisticsDetails = ({ statistics }) => {

    return (
        <div className='chart' style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <ComposedChart
                    width={500}
                    height={400}
                    data={statistics}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="total" barSize={20} fill="#413ea0" />

                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatisticsDetails;