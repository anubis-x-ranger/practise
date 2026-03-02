import { Card, CardContent } from "@/components/ui/card";
import { Wallet, ChartPie, Bell } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Expense Tracking",
    desc: "Monitor income and expenses effortlessly.",
  },
  {
    icon: ChartPie,
    title: "Smart Analytics",
    desc: "Visual insights into spending habits.",
  },
  {
    icon: Bell,
    title: "Bill Reminders",
    desc: "Never miss a payment again.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-12">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={i}>
              <CardContent className="p-6 space-y-4 text-center">
                <f.icon className="mx-auto h-8 w-8" />
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}