import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2025-09-10", systolic: 120, diastolic: 80 },
  { date: "2025-09-11", systolic: 118, diastolic: 79 },
  { date: "2025-09-12", systolic: 125, diastolic: 82 },
  { date: "2025-09-13", systolic: 130, diastolic: 85 },
  { date: "2025-09-14", systolic: 128, diastolic: 83 },
  { date: "2025-09-15", systolic: 122, diastolic: 80 },
];

export default function BloodPressureChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">
        Blood Pressure Tracking
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[60, 140]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="systolic" stroke="#ff0000" name="Systolic" />
          <Line type="monotone" dataKey="diastolic" stroke="#0000ff" name="Diastolic" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
