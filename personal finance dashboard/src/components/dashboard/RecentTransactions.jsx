export default function RecentTransactions() {
  const transactions = [
    { id: 1, name: "Groceries", amount: "-$120" },
    { id: 2, name: "Salary", amount: "+$3000" },
    { id: 3, name: "Netflix", amount: "-$15" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold mb-4">
        Recent Transactions
      </h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Description</th>
            <th className="py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="py-2">{t.name}</td>
              <td className="py-2">{t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}