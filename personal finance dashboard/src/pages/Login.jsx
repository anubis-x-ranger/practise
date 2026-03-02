import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* LEFT — Branding */}
      <div className="hidden md:flex flex-col justify-center items-center bg-sky-600 text-white p-12">
        <h1 className="text-4xl font-bold mb-6">
          Welcome Back
        </h1>

        <p className="max-w-md text-center text-lg opacity-90">
          Log in to track expenses, manage budgets, and stay
          in control of your financial future.
        </p>
      </div>

      {/* RIGHT — Login Form */}
      <div className="flex items-center justify-center p-6 bg-muted/30">
        <LoginForm />
      </div>

    </div>
  );
}