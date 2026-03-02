import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Take Control of Your Financial Life
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            Track expenses, manage budgets, and reach savings goals
            with one powerful dashboard.
          </p>

          <div className="mt-8 flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button  size="lg">
              View Demo
            </Button>
          </div>
        </div>

        <div className="bg-muted h-[350px] rounded-2xl shadow-lg flex items-center justify-center">
          Dashboard Preview
        </div>

      </div>
    </section>
  );
}