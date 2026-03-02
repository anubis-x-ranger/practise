import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white border-b px-6 py-4">

      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <Bell size={20} />
        <User size={20} />
      </div>

    </div>
  );
}