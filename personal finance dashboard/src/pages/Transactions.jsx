import Layout from "@/components/dashboard/Layout";
import { Button } from "@/components/ui/button";

export default function Transactions() {
  const transactions = [
    { id: 1, name: "Salary", amount: "+$3000" },
    { id: 2, name: "Groceries", amount: "-$120" },
    { id: 3, name: "Netflix", amount: "-$15" },
  ];

  return (
    <Layout title="Transactions">

      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          All Transactions
        </h2>

        <Button>Add Transaction</Button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b">
                <td className="py-3">{t.name}</td>
                <td>{t.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </Layout>
  );
}