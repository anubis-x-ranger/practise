
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar({title}) {
  return (
    <header className="h-16 bg-blue-300  text-xlborder-b flex items-center justify-between px-6">

      {/* LEFT — Page Title */}
      <h1 className="text-xl font-semibold">
        Dashboard
      </h1>
      {/* <h1 className="text-xl font-semibold">{title}</h1> */}


      {/* CENTER — Search */}
      <div className="hidden md:flex w-1/3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions..."
            className="pl-9"
          />
        </div>
      </div>

      {/* RIGHT — Actions */}
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer" />
  <User size={20} />
        <Avatar>
          <AvatarFallback>MS</AvatarFallback>
        </Avatar>
      </div>

    </header>
  );
}