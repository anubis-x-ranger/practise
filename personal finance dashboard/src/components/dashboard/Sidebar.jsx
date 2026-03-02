import { Home, Wallet, BarChart2, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove token (later replace with auth logic)
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <aside className=" md:flex flex-col w-64 bg-blue-300 border-r">

      {/* TOP SECTION */}
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold tracking-tight">
          FinanceDash
        </h2>
      </div>

      {/* MIDDLE NAVIGATION */}
      <div className="flex-1 p-6 space-y-4">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 text-sm font-medium hover:text-sky-600"
        >
          <Home size={18} />
          Dashboard
        </Link>

        <Link
          to="/transactions"
          className="flex items-center gap-3 text-sm font-medium hover:text-sky-600"
        >
          <Wallet size={18} />
          Transactions
        </Link>

        <Link
          to="/reports"
          className="flex items-center gap-3 text-sm font-medium hover:text-sky-600"
        >
          <BarChart2 size={18} />
          Reports
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 text-sm font-medium hover:text-sky-600"
        >
          <Settings size={18} />
          Settings
        </Link>

      </div>

      {/* BOTTOM LOGOUT */}
      <div className="p-6 border-t">
        <Button
          
          className="w-full flex items-center gap-2"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>

    </aside>
  );
}