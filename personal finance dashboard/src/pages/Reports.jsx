import Layout from "@/components/dashboard/Layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", expense: 400 },
  { month: "Feb", expense: 700 },
  { month: "Mar", expense: 500 },
];

export default function Reports() {
  return (
    <Layout title="Reports">

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="font-semibold mb-4">
          Expense Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="expense" fill="#0284c7" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </Layout>
  );
}