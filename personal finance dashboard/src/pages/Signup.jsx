import SignupForm from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* LEFT SIDE — Branding */}
      <div className="hidden md:flex flex-col justify-center items-center bg-sky-600 text-white p-12">
        <h1 className="text-4xl font-bold mb-6">
          Join FinanceDash
        </h1>

        <p className="max-w-md text-center text-lg opacity-90">
          Track expenses, build smarter budgets, and achieve your
          financial goals with clarity and confidence.
        </p>
      </div>

      {/* RIGHT SIDE — Form */}
      <div className="flex items-center justify-center p-6 bg-muted/30">
        <SignupForm />
      </div>

    </div>
  );
}