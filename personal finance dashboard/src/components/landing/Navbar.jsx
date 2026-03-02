import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white/80  backdrop-blur border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-xl">FinanceDash</h1>

        <div className="hidden md:flex gap-6 items-center">
          <a href="#features">Features</a>
          <a href="#how">How it Works</a>
          <Button>Get Started</Button>
        </div>

        <Menu className="md:hidden" />
      </div>
    </nav>
  );
}