import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-md shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          Log In to Your Account
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Access your finance dashboard
        </p>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">

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

      

          {/* Submit */}
          <Button className="w-full" size="lg">
          Log In
          </Button>

        </form>

        {/* Signup redirect */}
        <p className="text-center text-sm mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-sky-600 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}