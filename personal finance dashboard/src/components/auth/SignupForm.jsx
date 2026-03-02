import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          Create Account
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Start managing your finances today
        </p>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">

          {/* Name */}
          <div className="space-y-2">
            <Label>Full Name</Label>
            <Input placeholder="Michael Scott" />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" placeholder="you@example.com" />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label>Confirm Password</Label>
            <Input type="password" />
          </div>

          {/* Submit */}
          <Button className="w-full" size="lg">
            Sign Up
          </Button>

        </form>

        {/* Login Redirect */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-sky-600 font-medium hover:underline"
          >
           Log In
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}