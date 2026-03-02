import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", expense: 400 },
  { month: "Feb", expense: 700 },
  { month: "Mar", expense: 500 },
  { month: "Apr", expense: 900 },
];

export default function ExpenseChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        Monthly Expenses
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="expense" stroke="#0284c7" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}