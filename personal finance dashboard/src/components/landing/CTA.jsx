import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-sky-600 text-white text-center">
      <h2 className="text-4xl font-bold">
        Ready to Master Your Finances?
      </h2>

      <p className="mt-4 opacity-90">
        Start tracking today and build better money habits.
      </p>

      <Button size="lg"  className="mt-8">
        Get Started Free
      </Button>
    </section>
  );
}