import { Card, CardContent } from "@/components/ui/card";

export default function SummaryCards() {
  const stats = [
    { title: "Total Balance", value: "$12,430" },
    { title: "Income", value: "$5,200" },
    { title: "Expenses", value: "$2,800" },
    { title: "Savings", value: "$1,400" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              {stat.title}
            </p>
            <h2 className="text-2xl font-bold mt-2">
              {stat.value}
            </h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}