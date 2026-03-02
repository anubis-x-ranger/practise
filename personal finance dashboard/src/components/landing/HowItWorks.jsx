export default function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg">1. Add Transactions</h3>
            <p className="text-muted-foreground">
              Log income and expenses easily.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">2. Analyze Spending</h3>
            <p className="text-muted-foreground">
              Understand where money goes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">3. Achieve Goals</h3>
            <p className="text-muted-foreground">
              Stay on track with budgets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}