import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-muted/40">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar title={title} />

        <main className="p-6 space-y-6">
          {children}
        </main>
      </div>

    </div>
  );
}